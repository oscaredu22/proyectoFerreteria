import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioService } from '../servicio.service';
import { ModalRegistroComponent } from '../modal-registro/modal-registro.component';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';
import { Login, LoginGet } from '../modelos/login.model';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  enviarDatos = new Login();

  constructor(
    private breakpointObserver: BreakpointObserver,
    private dialogo: MatDialog,
    private servicioService : ServicioService,
    private router:Router
  ) { }

  ngOnInit() {
  }

  abrirModalRegistro():void{
    const dialogRef = this.dialogo.open(ModalRegistroComponent, {
      width: '20%',
    });
    dialogRef.afterClosed().subscribe(res => {
      console.log(res);
    });
  }

  envio(){
    this.verificacionLogin(this.enviarDatos);
  }

  verificacionLogin(body : Login){
     this.servicioService.postLogin(body).subscribe(data => {
        console.log(data.ok);
        if(data.ok === true){
        // localStorage.setItem("valoresUsuario",JSON.stringify(data));
          this.router.navigateByUrl('/dashboard');
        }
        else{
          alert('ingresar los datos correctos');
        }
      },
      error =>{
        console.log(JSON.stringify(error));
    });
  }


}
