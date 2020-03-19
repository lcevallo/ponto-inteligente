import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import {MatSnackBar} from '@angular/material';
import {Router} from '@angular/router';
import {Lancamento, Tipo} from '../../../shared/models';
import {HttpUtilService, LancamentoService} from '../../../shared/services';


declare var navigator: any;

@Component({
  selector: 'app-lancamento',
  templateUrl: './lancamento.component.html',
  styleUrls: ['./lancamento.component.css']
})
export class LancamentoComponent implements OnInit {

  private dataAtualEn: string;
  dataAtual: string;
  geoLocation: string;
  ultimoTipoLancado: string;

  constructor(
    private snackBar: MatSnackBar,
    private router: Router,
    private httpUtil: HttpUtilService,
    private lancamentoService: LancamentoService
  ) { }

  ngOnInit() {
    this.dataAtual = moment().format('DD/MM/YYYY HH:mm:ss');
    this.dataAtualEn = moment().format('YYYY-MM-DD HH:mm:ss');
    this.obterGeoLocation();
    this.ultimoTipoLancado = '';
    this.obterUltimoLancamento();
  }

  private obterGeoLocation(): string {
      if(navigator.geolocation) {
        // tslint:disable-next-line:max-line-length
        navigator.geolocation.getCurrentPosition(position => this.geoLocation = `${position.coords.latitude}, ${position.coords.longitude}`);
        }
      return '';
  }


   iniciarTrabajo() {
    this.cadastrar(Tipo.INICIO_TRABALHO);
   }

   terminarTrabalho() {
     this.cadastrar(Tipo.TERMINO_TRABALHO);
   }

   iniciarAlmoco() {
     this.cadastrar(Tipo.INICIO_ALMOCO);
   }

  terminarAlmoco() {
    this.cadastrar(Tipo.TERMINO_ALMOCO);
  }

  obterUltimoLancamento() {
    this.lancamentoService.buscarUltimoTipoLancado()
      .subscribe(
        data => {
          this.ultimoTipoLancado = data.data ? data.data.tipo : '';
        },
        err => {
          const msg: string = 'Error obteniendo ultimo lanzamiento.';
          this.snackBar.open(msg, 'Erro', {duration: 5000});
        }
      );
  }

  cadastrar(tipo: Tipo) {
    const lancamento: Lancamento = new Lancamento(
      this.dataAtualEn,
      tipo,
      this.geoLocation,
      this.httpUtil.obtenerIdUsuario()
    );
    this.lancamentoService.cadastrar(lancamento)
      .subscribe(
        data => {
          const msg: string = 'Lanzamiento realizado con exito!';
          this.snackBar.open(msg, 'Exito', {duration: 5000 });
          this.router.navigate(['/funcionario/listagem']);
        },
        err => {
          let msg: string = 'Intente nuevamente en unos momentos';
          if (err.status === 400) {
            msg = err.error.errors.join('');
          }
          this.snackBar.open(msg, 'Error', { duration: 5000 });
        }
      );
  }

  obtenerUrlMapa(): string {
    return 'https://www.google.com/maps/search/?api=1&query=' + this.geoLocation;
  }
  exhibirInicioTrabajo(): boolean {
    return this.ultimoTipoLancado === '' || this.ultimoTipoLancado === Tipo.TERMINO_TRABALHO;
  }

  exhibirTerminoTrabajo(): boolean {
    return this.ultimoTipoLancado ===  Tipo.INICIO_TRABALHO || this.ultimoTipoLancado === Tipo.TERMINO_ALMOCO;
  }

  exhibirInicioAlmoco(): boolean {
    return this.ultimoTipoLancado === Tipo.INICIO_TRABALHO;
  }

  exhibirTerminoAlmoco(): boolean {
    return this.ultimoTipoLancado ===  Tipo.INICIO_ALMOCO;
  }





}
