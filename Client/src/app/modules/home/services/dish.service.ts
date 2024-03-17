import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Dish } from 'src/app/models/dish.model';

@Injectable({
  providedIn: 'root',
})
export class DishService {
  constructor(private httpClient: HttpClient) {}

  getDishes(): Observable<Dish[]> {
    return this.httpClient.get<Dish[]>(`./api/dish`);
  }
}
