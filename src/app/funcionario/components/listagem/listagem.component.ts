import {Component, OnInit, ViewChild} from '@angular/core';

import 'rxjs/add/observable/of';
import {MatPaginator, MatSnackBar, MatSort, MatTableDataSource} from '@angular/material';
import {Lancamento} from '../../../shared/models';
import {LancamentoService} from '../../../shared/services';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent implements OnInit {

  dataSource: MatTableDataSource<Lancamento>;
  colunas: string[] = ['data', 'tipo', 'localizacao'];

  @ViewChild(MatSort, { static: true}) sort: MatSort;
  @ViewChild(MatPaginator, { static: true}) paginator: MatPaginator;


  constructor(
    private lancamentoService: LancamentoService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.lancamentoService.listarTodosLancamentos()
      .subscribe(
          data => {
                        const lancamentos = data.data as Lancamento[];
                        this.dataSource = new MatTableDataSource<Lancamento>(lancamentos);
                        this.dataSource.sort = this.sort;
                        this.dataSource.paginator = this.paginator;
                      },
        err => {
                      const msg = 'Error obteniendo lanzamientos.';
                      this.snackBar.open(msg, 'Error', { duration: 5000});
                    }
      );
  }

}
