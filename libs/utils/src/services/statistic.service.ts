import { Injectable } from '@angular/core';
import { statistic } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class statisticsService {

  statisticGenerator(params:statistic){
    console.log(params);
    
    }
}
