import { UserLocal } from './../models/user.model';
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Config } from '@ionic/angular';
import { Plugins } from "@capacitor/core";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {
  isLogin = true;
  userId: UserLocal;
  constructor( private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }
  onLogin() {

    this.router.navigateByUrl('/home');
  }
  onSwitchAuthMod() {
    this.router.navigateByUrl('/register');
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    const email = form.value.email;
    const password = form.value.password;
   
    this.authService.authenticate('admin','1234').subscribe(data=>{
      const token = 'Bearer '+data.headers.get('authorization')
      this.authService.sauvegarderAuthData(email,token) 
      this.authService.login();
      this.router.navigateByUrl('/home')

    }, err => {
      console.log(err)
    });

    form.reset();
  }

}
