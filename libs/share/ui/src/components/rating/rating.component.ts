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
    console.log(this.size);
    
  }
  rating  = input<number>()
  size  = input<number>()
  stars: number[] = []

  checkRaiting(){
    const rati= this.rating()
    let surplus = 0
    if (rati) {
      let index = 1; 
      while (index < rati) {
          surplus = index;
          this.stars.push(100);
          index++; 
      }
      surplus = (rati - surplus)*100
      this.stars.push(surplus)
      while(this.stars.length < 5){
        console.log(this.stars);
        this.stars.push(0)
      }
    }
  }
}
