import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CategoryService } from 'src/app/category.service';
import { GymserviceService } from 'src/app/gymservice.service';
import { map, take } from 'rxjs/operators';

@Component({
  selector: 'app-newgym-form',
  templateUrl: './newgym-form.component.html',
  styleUrls: ['./newgym-form.component.css']
})
export class NewgymFormComponent implements OnInit {
  categories$: Observable<any>;
  id;
  gym:any = {};

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private categoryService: CategoryService, 
    private gymService: GymserviceService) {
    this.categories$ = categoryService.getCategories().snapshotChanges().pipe(map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    }));;;

    this.id = this.route.snapshot.paramMap.get('id');
    if(this.id){
      this.gymService.get(this.id).pipe(take(1)).subscribe(g => this.gym = g);
    }
  }

  save(gym) {
    if(this.id) {
      this.gymService.update(this.id, gym);
    }
    else{
      this.gymService.create(gym);
    }

    this.router.navigate(['/admin/gyminfo']);
  }

  delete(){
    if(confirm('Are you sure you want to delete the Gym Information ?')){
      this.gymService.delete(this.id);
      this.router.navigate(['/admin/gyminfo']);
    }
  }

  ngOnInit(): void {
  }

}
