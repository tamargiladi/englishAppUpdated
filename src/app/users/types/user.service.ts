import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from './user.model';

@Injectable({ providedIn: 'root' })
export class UserService {
  private user: User;
  private usernameUpdated = new Subject<User>();

  constructor(private http: HttpClient) {}

  getUserName(): void {
    this.http
      .get<{ message: string; user: User }>(
        'http://localhost:3000/api/username'
      )
      .subscribe((userData) => {
        this.user = userData.user;
        this.usernameUpdated.next(this.user);
      });
  }
  getUserUpdateListener() {
    return this.usernameUpdated.asObservable();
  }
}
