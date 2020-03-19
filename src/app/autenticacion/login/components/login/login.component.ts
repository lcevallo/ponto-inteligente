import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { MatSnackBar} from '@angular/material';
import {Login} from '../../models';
import {LoginService} from '../../services';
import {Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private  snackBar: MatSnackBar,
    private router: Router,
    private loginService: LoginService
  ) { }

  ngOnInit() {
    this.generarForm();
  }

  generarForm() {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  lugar() {
    if(this.form.invalid){
      return;
    }
    const login: Login = this.form.value;
    this.loginService.lugar(login)
      .subscribe(
          data => {
                          localStorage['token'] = data['data']['token'];
                          const usuarioData = JSON.parse(
                              atob(data['data']['token'].split('.')[1]));
                          if (usuarioData['role'] === 'ROLE_ADMIN') {
                            this.router.navigate(['/admin']);
                          }
                          else {
                            this.router.navigate(['/funcionario']);
                          }
                        },
            error => {
                            let msg: string = 'Intente nuevamente mas tarde.';
                            if(error['status'] == 401){
                              msg = 'Email/contraseña invalidos.';
                            }
                            this.snackBar.open(msg, 'Error', { duration: 5000 });

                          }
      );
  }
}
