import { Component, Input, OnInit } from '@angular/core';
import { Gym } from '../models/gyminfo';

@Component({
  selector: 'app-gyminfo-card',
  templateUrl: './gyminfo-card.component.html',
  styleUrls: ['./gyminfo-card.component.css']
})
export class GyminfoCardComponent {
  @Input('gym') gym;
  @Input('show-actions') showActions = true;

  constructor() { }

}
