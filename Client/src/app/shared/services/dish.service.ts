import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Dish, DishData } from 'src/app/models/dish.model';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class DishService {
  constructor(private http: HttpClient) {}

  getDishes(): Observable<Dish[]> {
    return this.http.get<Dish[]>(`${environment.apiUrl}/api/dish`);
  }

  addDish(dish: DishData): Observable<Dish> {
    return this.http.post<Dish>(`${environment.apiUrl}/api/dish`, dish);
  }

  deleteDish(id: string): Observable<Dish> {
    return this.http.delete<Dish>(`${environment.apiUrl}/api/dish/${id}`);
  }

  updateDish(dish: Dish): Observable<Dish> {
    return this.http.put<Dish>(
      `${environment.apiUrl}/api/dish/${dish._id}`,
      dish
    );
  }
}
