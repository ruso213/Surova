import { ChangeDetectorRef, Component, input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'lib-rating',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './rating.component.html',
  styleUrl: './rating.component.scss',
})
export class RatingComponent implements OnInit{
  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.checkRaiting()
  }
  rating  = input<number>()
  stars: number[] = []

  checkRaiting(){
    const rati= this.rating()
    let surplus = 0
    if (rati) {
      for (let i = 1; i < rati; i++) {
        surplus =i
        this.stars.push(100)
      }
      surplus = (rati - surplus)*100
      this.stars.push(surplus)
    }
  }
}
