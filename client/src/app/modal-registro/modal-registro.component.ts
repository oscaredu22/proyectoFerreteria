import { Component, OnInit, Inject } from '@angular/core';
import { ServicioService } from '../servicio.service';
import { Router } from '@angular/router';
import { Login, LoginGet } from '../modelos/login.model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';


@Component({
  selector: 'app-modal-registro',
  templateUrl: './modal-registro.component.html',
  styleUrls: ['./modal-registro.component.scss']
})
export class ModalRegistroComponent implements OnInit {

  resultado : Array<LoginGet>;
  login = new Login();

  constructor(
    private dialogRef : MatDialogRef<ModalRegistroComponent>,
    @Inject(MAT_DIALOG_DATA) public mensaje: string,
    private servicioService : ServicioService,
    private router:Router
  ) { }

  ngOnInit() {
  }

  //SALIR MODAL
  clickSalir(){
    this.dialogRef.close();
  }

  registro(){
    this.agregarP(this.login);
  }

  agregarP(body: Login){
    this.servicioService.postRegistro(body).subscribe(data => {
      this.resultado = [];
      this.resultado.push(data);
      alert("te haz registrado con éxito")
    },
    error =>{
      console.log(error)
    });
  }

}
