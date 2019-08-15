import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { Login , LoginGet } from './modelos/login.model';
import { AdministracionGet, Administracion } from './modelos/admin.model';


const httpOptions = {
  headers: new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded')
}


@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor( private http: HttpClient) { }



  //INSERTAR USUARIO
  insertUsuario(user : Login): Observable<LoginGet> {
    console.log(user);
    return this.http.post<LoginGet>('http://localhost:3000/agregarUsuario', user);
  }


  //INSERTAR ADMINISTRADOR
  insertAdmin(admin : Administracion): Observable<AdministracionGet> {
    console.log(admin);
    return this.http.post<AdministracionGet>('http://localhost:3000/agregarAdmin', admin);
  }

  //VERIFICAR ADMIN
  verificacionAdmin(admin : Administracion): Observable<any>{
    return this.http.post<AdministracionGet>('http://localhost:3000/logAdmin', admin);
  }

  //VERIFICACION LOGIN
  envioVerificacion(login : Login): Observable<any>{
    return this.http.post<LoginGet>('http://localhost:3000/login', login);
  }


  //NUEVO
  //REGISTRO
  postRegistro(login : Login): Observable<LoginGet>{
    return this.http.post<LoginGet>('http://localhost:3001/server/registroAdmin', login);
  }

  //VERDIFICACION LOGIN
  postLogin(login : Login): Observable<any>{
    return this.http.post<LoginGet>('http://localhost:3001/server/inicioSession', login);
  }
}
