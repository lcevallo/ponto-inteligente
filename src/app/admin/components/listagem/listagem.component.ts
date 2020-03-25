import { FormBuilder, FormGroup } from '@angular/forms';
import {
  MatTableDataSource,
  MatSnackBar,
  PageEvent,
  Sort,
  MatSelect,
  MatDialog,
  MAT_DIALOG_DATA
} from '@angular/material';
import { OnInit, ViewChild, Component, Inject } from '@angular/core';

import {
  LancamentoService,
  Lancamento,
  Funcionario,
  Tipo,
  HttpUtilService,
  FuncionarioService
} from './../../../shared';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent implements OnInit {
  dataSource: MatTableDataSource<Lancamento>;
  columnas: string[] = ['data', 'tipo', 'localizacao', 'acao'];
  funcionarioId: string;
  totalLancamentos: number;

  funcionarios: Funcionario[];
  @ViewChild(MatSelect, { static: true }) matSelect: MatSelect;
  form: FormGroup;

  private pagina: number;
  private ordem: string;
  private direcao: string;

  constructor(
    private lancamentoService: LancamentoService,
    private httpUtil: HttpUtilService,
    private snackBar: MatSnackBar,
    private fb: FormBuilder,
    private funcionarioService: FuncionarioService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.pagina = 0;
    this.ordemPadrao();
    this.obterFuncionarios();
    this.gerarForm();
  }

  gerarForm() {
    this.form = this.fb.group({
      funcs: ['', []]
    });
  }

  ordemPadrao() {
    this.ordem = 'data';
    this.direcao = 'DESC';
  }
  get funcId(): string {
    return sessionStorage['funcionarioId'] || false;
  }

  obterFuncionarios() {
    this.funcionarioService.listarFuncionariosPorEmpresa().subscribe(
      data => {
        const usuarioId: string = this.httpUtil.obtenerIdUsuario();
        this.funcionarios = (data.data as Funcionario[]).filter(
          func => func.id != usuarioId
        );

        if (this.funcId) {
          this.form.get('funcs').setValue(parseInt(this.funcId, 10));
          this.exibirLancamentos();
        }
      },
      err => {
        const msg: string = 'Error obtenido funcionarios.';
        this.snackBar.open(msg, 'Error', { duration: 5000 });
      }
    );
  }

  exibirLancamentos() {
    if (this.matSelect.selected) {
      this.funcionarioId = this.matSelect.selected['value'];
    } else if (this.funcId) {
      this.funcionarioId = this.funcId;
    } else {
      return;
    }
    sessionStorage['funcionarioId'] = this.funcionarioId;

    this.lancamentoService
      .listarLancamentosPorFuncionario(
        this.funcionarioId,
        this.pagina,
        this.ordem,
        this.direcao
      )
      .subscribe(
        data => {
          this.totalLancamentos = data['data'].totalElements;
          const lancamentos = data['data'].content as Lancamento[];
          this.dataSource = new MatTableDataSource<Lancamento>(lancamentos);
        },
        err => {
          const msg: string = 'Error obteniendo lanzamientos';
          this.snackBar.open(msg, 'Error', { duration: 5000 });
        }
      );
  }

  paginar(pageEvent: PageEvent) {
    this.pagina = pageEvent.pageIndex;
    this.exibirLancamentos();
  }

  ordenar(sort: Sort) {
    if (sort.direction == '') {
      this.ordemPadrao();
    } else {
      this.ordem = sort.active;
      this.direcao = sort.direction.toUpperCase();
    }
    this.exibirLancamentos();
  }

  removerDialog(lancamentoId: string) {
    const dialog = this.dialog.open(ConfirmarDialog, {});
    dialog.afterClosed().subscribe(remover => {
      if (remover) {
        this.remover(lancamentoId);
      }
    });
  }

  remover(lancamentoId: string) {
    this.lancamentoService.remover(lancamentoId).subscribe(
      data => {
        const msg: string = 'Lanzamiento removido con exito!';
        this.snackBar.open(msg, 'Exito', { duration: 5000 });
        this.exibirLancamentos();
      },
      err => {
        let msg: string = 'Intente nuevamente en instantes.';
        if (err.status == 400) {
          msg = err.console.error.erros.join(' ');
        }
        this.snackBar.open(msg, 'Error', { duration: 5000 });
      }
    );
  }
}

@Component({
  selector: 'confirmar-dialog',
  template: `
    <h1 mat-dialog-title>Desea realmente remover el lanzamiento?</h1>
    <div mat-dialog-actios>
      <button mat-button [mat-dialog-close]="false" tabindex="-1">
        No
      </button>
      <button mat-button [mat-dialog-close]="true" tabindex="2">
        Si
      </button>
    </div>
  `
})
export class ConfirmarDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}
