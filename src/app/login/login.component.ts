import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoaderService } from '../config/loader.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  loading: boolean = false;

  constructor(
    private login: AuthService,
    private loaderService: LoaderService
  ) { 
    this.loaderService.isLoading.subscribe((v) => {
      if (this.loading)
        setTimeout(() => {
          this.loading = v;
        }, 1000)
      else
        this.loading = v;
    });
  }

  logger(dadoLogin: NgForm) {
    if (dadoLogin.valid) {
      this.login.auth(dadoLogin.value).subscribe((returnSubmited: any) => {
        if ('id' in returnSubmited) {
          sessionStorage.setItem('idSession', returnSubmited.token);
          setTimeout(() => {
            this.login.route.navigate(['./home']);
          }, 1000);
        }
      });
    } else {
      this.login.openSnackBar('Digite os valores corretamente!', 'Erro');
    }
  }
}
