import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { statistic } from '@surova/utils';


@Component({
  selector: 'lib-graph',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './graph.component.html',
  styleUrl: './graph.component.scss',
})
export class GraphComponent{
  data = input<statistic[]>()

 
}
