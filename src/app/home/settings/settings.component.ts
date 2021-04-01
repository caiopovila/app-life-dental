import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CustomersService } from 'src/app/services/customers.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  user: any = {};

  constructor(
    private service: CustomersService
  ) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.service.get().subscribe(ret => this.user = ret);
    })
  }

  send(form: NgForm) {
    if (form.valid)
      this.service.post(form.value).subscribe(() => this.service.openSnackBar('Enviado...'))
    else
      this.service.openSnackBar('Preencha os campos corretamente!', 'Erro');
  }
}
