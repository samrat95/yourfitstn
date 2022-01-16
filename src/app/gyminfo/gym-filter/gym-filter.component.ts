import { Component, Input, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/category.service';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-gym-filter',
  templateUrl: './gym-filter.component.html',
  styleUrls: ['./gym-filter.component.css']
})
export class GymFilterComponent {
  categories$;
  @Input('category') category;

  constructor(categoryService: CategoryService) { 
    this.categories$ = categoryService.getCategories().snapshotChanges().pipe(map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    }));;;  
  }
}
