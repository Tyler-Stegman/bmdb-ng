import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user.class';
import { Observable } from 'rxjs';
import { JsonResponse } from '../model/json-response.class';
const url: string = "http://localhost:8080/users/";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  login(user: User): Observable<JsonResponse>{
    return this.http.post(url+"login",user) as Observable<JsonResponse>;
  }
  }

