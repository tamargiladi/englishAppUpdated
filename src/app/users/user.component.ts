import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from './types/user.service';
import { Subscription } from 'rxjs';
import { User } from './types/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
})
export class UserComponent implements OnInit, OnDestroy {
  user: User;
  private userSub: Subscription;

  constructor(public userService: UserService) {}
  ngOnInit() {
    //Triger http reqursts - now we just trigger
    this.userService.getUserName();
    this.userSub = this.userService
      .getUserUpdateListener()
      .subscribe((user: User) => {
        this.user = user;
      });
  }
  ngOnDestroy() {
    this.userSub.unsubscribe();
  }
}
