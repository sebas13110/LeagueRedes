import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../servicio.service';
import { NasaModel } from '../nasamodel';
import { Subscription, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-nasa',
  templateUrl: './nasa.component.html',
  styleUrls: ['./nasa.component.css']
})

export class NasaComponent implements OnInit {
  nasal!: Object;
  public nasa2 :any;
  variable: string = "";
  jsonstring : string = "";
  variable1: string = "";
  variable2: string = "";
  variable3: string = "";
  obj : Object = {};
  objeto: Object={};
  public swal: any;

  
  
datos:NasaModel[]=[];
  private datossub: Subscription = new Subscription;
  constructor(public servicio:ServicioService,private httpClient:HttpClient) { }
  tenerdatos(){
    this.httpClient.get('/getDatos?date='+this.today) 
    .pipe(catchError(this.erroHandler))

    .subscribe(res=>{
      console.log(res);
      this.nasal=res;
      console.log(JSON.stringify(this.nasal));
      this.nasa2=res;
      this.jsonstring = JSON.stringify(this.nasal);
      this.obj = JSON.parse(this.jsonstring);
      
      type ObjectKey = keyof typeof this.nasal;
    const myVar = 'resultado' as ObjectKey;
    console.log(this.nasal[myVar]);
    this.variable = this.nasal[myVar].toString();
    this.objeto = this.nasal[myVar];

    type ObjectKey1 = keyof typeof this.objeto;
    const myVar1 = 'hdurl' as ObjectKey1;
    console.log(this.objeto[myVar1]);
    this.variable = this.objeto[myVar1].toString();

    type ObjectKey2 = keyof typeof this.objeto;
    const myVar2 = 'date' as ObjectKey2;
    console.log(this.objeto[myVar2]);
    this.variable1 = this.objeto[myVar2].toString();

    type ObjectKey3 = keyof typeof this.objeto;
    const myVar3 = 'explanation' as ObjectKey3;
    console.log(this.objeto[myVar3]);
    this.variable2 = this.objeto[myVar3].toString();

    type ObjectKey4 = keyof typeof this.objeto;
    const myVar4 = 'title' as ObjectKey4;
    console.log(this.objeto[myVar4]);
    this.variable3 = this.objeto[myVar4].toString();


  
      
    }),(error:HttpErrorResponse) => {
      let errorPayload = JSON.parse(error.message);
      console.log(error.error);
  }
  }
  private start!: Date;
  today!: Date;
  ngOnInit() {
    this.today=new Date();
    this.servicio.getdia();
    this.datossub=this.servicio
    .getdatosUpdateListener()
    .subscribe((datos:NasaModel[])=>{
      this.datos=datos;
    });
  }
onShow(){
  console.log('TODO')
}
erroHandler(error: HttpErrorResponse) {
  console.log(error.message);
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'Something went wrong!',
    footer: '<a href="">Why do I have this issue?</a>'
  })
  return throwError(error.message || 'server Error');
}

ngOnDestroy(){
  this.datossub.unsubscribe();
}
}
