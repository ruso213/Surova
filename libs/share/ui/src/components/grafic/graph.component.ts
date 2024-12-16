import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RatingComponent } from '../rating/rating.component';

@Component({
  selector: 'lib-graph',
  standalone: true,
  imports: [CommonModule, RatingComponent],
  templateUrl: './graph.component.html',
  styleUrl: './graph.component.scss',
})
export class GraphComponent {
  data = [
    { label: '1', value: 3 },
    { label: '2', value: 5 },
    { label: '3', value: 7 },
    { label: '4', value: 10 },
    { label: '5', value: 75 },
  ];}
