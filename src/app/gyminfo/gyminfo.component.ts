import { Component, OnInit } from '@angular/core';
import { GymserviceService } from '../gymservice.service';
import { map, switchMap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { Gym } from '../models/gyminfo';

@Component({
  selector: 'app-gyminfo',
  templateUrl: './gyminfo.component.html',
  styleUrls: ['./gyminfo.component.css']
})
export class GyminfoComponent {
  gymInfo: Gym[] = [];
  filteredGyms: Gym[] = [];
  category: string;

  constructor(
    route: ActivatedRoute,
    gymService: GymserviceService) { 

    gymService
      .getAll()
      .pipe(switchMap((gymInfo: Gym[]) => {
      this.gymInfo = gymInfo;
      return route.queryParamMap;
      })).subscribe(params => {
        this.category = params.get('category');

        this.filteredGyms = (this.category) ?
          this.gymInfo.filter(g => g.category === this.category) : 
          this.gymInfo;
      });
  }

}
