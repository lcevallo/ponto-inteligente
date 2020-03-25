import { HttpUtilService } from './../../shared';
import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class AdminGuard implements CanActivate {
  constructor(
    private httpUtilService: HttpUtilService,
    private router: Router
  ) {}

  canActivate(): boolean {
    if (this.httpUtilService.obterPerfil() === 'ROLE_ADMIN') {
      return true;
    }
    this.router.navigate(['/funcionario']);
    return false;
  }
}
