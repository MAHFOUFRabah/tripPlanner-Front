import { UserRegister } from "./../models/userRegister.model";
import { AuthService } from "./../services/auth.service";
import { AlertController } from "@ionic/angular";
import { Component, OnInit } from "@angular/core";
import { Form, NgForm } from "@angular/forms";

@Component({
  selector: "app-register",
  templateUrl: "./register.page.html",
  styleUrls: ["./register.page.scss"],
})
export class RegisterPage implements OnInit {
  constructor(
    private alertCtrl: AlertController,
    private authService: AuthService
  ) {}

  ngOnInit() {}
  onSubmit(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    const confirmedPassword = form.value.rePassword;
    if (password !== confirmedPassword) {
      this.showAlert(
        "Confirmation du mot de passe",
        " Les mots de passe ne sont pas identique"
      );
      return;
    }
    if (!form.valid) {
      return;
    }
    const userForm = new UserRegister(email, password, confirmedPassword);
    this.authService.register(userForm).subscribe(
      (response) => {
        console.log(response.headers.get('authorization'));
        console.log(response.body);
        this.authService
          .ajouterUserBackEnd(
            response.body["idFonctionnel"],
            response.body["username"]
          )
          .subscribe(
            (response) => {
              console.log(response);
            },
            (error) => {
              console.log(error);
            }
          );
      },
      (error) => {
        console.log(error);
      }
    );
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
