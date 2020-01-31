import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar} from '@angular/material';
import {Router} from '@angular/router';
import {Cnpj, Cpf} from '../../../../shared/validators';
import {CadastroPf} from '../../models';

@Component({
  selector: 'app-cadastrar-pf',
  templateUrl: './cadastrar-pf.component.html',
  styleUrls: ['./cadastrar-pf.component.css']
})
export class CadastrarPfComponent implements OnInit {

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private router: Router
  ) { }

  ngOnInit() {
    this.generarForm();
  }

  private generarForm() {
    this.form = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(6)]],
      cpf: ['', [Validators.required, Cpf]],
      cnpj: ['', [Validators.required, Cnpj]]
    });
  }

  regitrarPf(){
    if(this.form.invalid) {
      return;
    }

    const cadastroPf: CadastroPf = this.form.value;

    alert(JSON.stringify(cadastroPf));

    return false;
  }
}
