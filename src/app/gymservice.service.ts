import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class GymserviceService {

  constructor(private db: AngularFireDatabase) { }

  create(gym){
    this.db.list('/gyms').push(gym);
  }

  getAll() {
    return this.db.list('/gyms').valueChanges();
  }

  get(gymId){
    return this.db.object('/gyms/' + gymId).valueChanges();
  }

  update(gymId, gym){
    this.db.object('/gyms/' + gymId).update(gym);
  }

  delete(gymId){
    return this.db.object('/gyms/' + gymId).remove();
  }
}
