import { AlertController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Form, NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(private alertCtrl: AlertController) { }

  ngOnInit() {
  }
  onSubmit(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    const rePassword =  form.value.rePassword
    if(password !== rePassword){
      this.showAlert('Confirmation du mot de passe',' Les mots de passe ne sont pas identique')
      return
    }
    if (!form.valid) {
      return;
    }
    

  }

  private showAlert(header: string, message: string) {
    this.alertCtrl
      .create({
        header: header,
        message: message,
        buttons: ["Okay"],
      })
      .then((alertEl) => alertEl.present());
  }

}
