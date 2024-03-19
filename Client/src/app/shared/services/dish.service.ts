import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Dish } from 'src/app/models/dish.model';

@Injectable({
  providedIn: 'root',
})
export class DishService {
  constructor(private http: HttpClient) {}

  getDishes(): Observable<Dish[]> {
    return this.http.get<Dish[]>(
      `https://restaurant-app-6jzn-1z8pbo8hs-olexandrsavelevs-projects.vercel.app/api/dish`
    );
  }
}
