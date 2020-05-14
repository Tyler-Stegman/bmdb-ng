import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user.class';
import { UserService } from 'src/app/service/user.service';
import { Router } from '@angular/router';
import { SystemService } from 'src/app/service/system.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  message: string = "";
  user: User = new User();

  constructor(private userSvc: UserService, private sysSvc: SystemService, private router: Router) { }

  ngOnInit(): void {
    // default userName and password
    this.user.userName = "mkeenan";
    this.user.password = "tool";

    this.sysSvc.loggedInUser = null;
  }

  login() {
    this.userSvc.login(this.user).subscribe(jr => {
      if (jr.errors==null) {
        // successful login
        this.user = jr.data as User;
        this.sysSvc.loggedInUser = this.user;
        this.router.navigateByUrl("/home");
      }
      else {
        // login error...display in message
        this.message = jr.errors as string;
      }
    });
  }

}
