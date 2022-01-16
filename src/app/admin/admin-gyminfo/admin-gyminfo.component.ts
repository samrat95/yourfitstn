import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { GymserviceService } from 'src/app/gymservice.service';
import { map } from 'rxjs/operators';
import { Gym } from 'src/app/models/gyminfo';

@Component({
  selector: 'app-admin-gyminfo',
  templateUrl: './admin-gyminfo.component.html',
  styleUrls: ['./admin-gyminfo.component.css']
})
export class AdminGyminfoComponent implements OnInit, OnDestroy {
  gyms: Gym[];
  filteredGymInfo: any[];
  subscription: Subscription;

  constructor(private gymService: GymserviceService) { 
    this.subscription = this.gymService.getAll().subscribe((gyms: Gym[]) => this.filteredGymInfo = this.gyms = gyms);

  }

  filter(query: string){
    this.filteredGymInfo = (query) ?
      this.gyms.filter(g => g.title.toLowerCase().includes(query.toLowerCase())) : 
      this.gyms;
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
      this.subscription.unsubscribe();
  }

}
