import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIcon } from '@angular/material/icon';
import { RatingComponent } from '../rating/rating.component';
import {  Review } from '@surova/utils';

@Component({
  selector: 'lib-comments',
  standalone: true,
  imports: [CommonModule,
    MatIcon,
    RatingComponent
  ],
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.scss',
})
export class CommentsComponent {
   reviews= input<Review>()

}
