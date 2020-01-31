import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar} from '@angular/material';
import {Router} from '@angular/router';
import {CadastroPj} from '../../models';
import {Cnpj, Cpf} from '../../../../shared/validators';
import {CadastroPjService} from '../../services';

@Component({
  selector: 'app-cadastrar-pj',
  templateUrl: './cadastrar-pj.component.html',
  styleUrls: ['./cadastrar-pj.component.css']
})
export class CadastrarPjComponent implements OnInit {

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private cadastroPjService: CadastroPjService,
    private router: Router) {
     this.generarForm();
  }

  ngOnInit() {
    this.generarForm();
  }

  private generarForm() {
    this.form = this.fb.group({
      nome : ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(6)]],
      cpf: ['', [Validators.required, Cpf]],
      razaoSocial: ['', [Validators.required, Validators.minLength(5)]],
      cnpj: ['', [Validators.required, Cnpj] ]
    });
  }

  cadastrarPj() {
    if(this.form.invalid){
      return;
    }
    const cadastroPj: CadastroPj = this.form.value;
    this.cadastroPjService.cadastrar(cadastroPj)
      .subscribe(
        data => {
                      console.log(JSON.stringify(data));
                      const msg: string = 'Realice el login para accesar al sistema.';
                      this.snackBar.open(msg, 'Exito', { duration: 5000});
                      this.router.navigate(['/login']);
                    },
              err => {
                          console.log(JSON.stringify(err));
                          let msg: string = 'Intente luego de un momento';
                          if(err.status === 400) {
                            msg = err.error.errors.join(' ');
                          }
                          this.snackBar.open(msg, 'Error', { duration: 5000 });
        }
      );
    return false;
  }
}
