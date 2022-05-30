import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  password : string = "";

  constructor(private authService : AuthService, private router : Router) { }

  ngOnInit(): void {
  }

  LoginUser(){
    if(this.password == "himabindhu"){
      this.authService.signInStatus = true
      this.router.navigate(["home"]);
    }
    else{
      this.authService.signInStatus = false
      alert("login Failed")
    }
  }

}
