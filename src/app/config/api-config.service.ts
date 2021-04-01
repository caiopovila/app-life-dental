import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { environment } from 'src/environments/environment';
import { MatDialog } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class ApiConfigService {

  constructor(
    public http: HttpClient,
    public route: Router,
    private messageBar: MatSnackBar,
    private dialog: MatDialog
    ) { }

  getUrlApi(): string {
    if (environment.production)
      return "https://localhost:5001/api";
    else
      return "https://localhost:5001/api";
  }

  getIdSession(): string {
    return sessionStorage.getItem('idSession') || "null";
  }

  errorTreatment(error: any) {
    if ('status' in error)
      switch (error.status) {
        case 403:
          sessionStorage.clear();
          this.dialog.closeAll();
          this.route.navigate(['./']);
          break;
        case 401:
          sessionStorage.clear();
          this.dialog.closeAll();
          this.route.navigate(['./']);
          break;
        case 500:
            this.openSnackBar('Algo deu errado', 'Erro');
          break;
        case 404:
          this.openSnackBar('error' in error && 'message' in error.error ? error.error.message : 'Ops!', 'Não autorizado');
          break;
        default:
          break;
      }
  }

  openSnackBar(message: string, action?: string) {
    this.messageBar.open(message, action || undefined, {
      duration: 4000
    });
  }
}
