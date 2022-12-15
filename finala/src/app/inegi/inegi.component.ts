import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-inegi',
  templateUrl: './inegi.component.html',
  styleUrls: ['./inegi.component.css']
})
export class InegiComponent implements OnInit {
  inegi!: Object;
  inegi2! : any;
  variable: string = "";
  inegi3! : any;
  levelNum!: number;
  levels:Array<any> = [
      {num: 0, name: "01",est:"Aguascalientes"},
      {num: 1, name: "02",est:"Baja California"},
      {num: 2, name: "03",est:"Baja California Sur"},
      {num: 4, name: "04",est:"Campeche"},
      {num: 3, name: "05",est:"Coahuila de Zaragoza"},
      {num: 6, name: "06",est:"Colima"},
      {num: 5, name: "07",est:"Chiapas"},
      {num: 7, name: "08",est:"Chihuahua"},
      {num: 8, name: "09",est:"Ciudad de México"},
      {num: 9, name: "10",est:"Durango"},
      {num: 10, name: "11",est:"Guanajuato"},
      {num: 11, name: "12",est:"Guerrero"},
      {num: 12, name: "13",est:"Hidalgo"},
      {num: 13, name: "14",est:"Jalisco"},
      {num: 14, name: "15",est:"Mexico"},
      {num: 15, name: "16",est:"Michoacon de Ocampo"},
      {num: 16, name: "17",est:"Morelos"},
      {num: 17, name: "18",est:"Nayarit"},
      {num: 18, name: "19",est:"Nuevo León"},
      {num: 19, name: "20",est:"Oaxaca"},
      {num: 20, name: "21",est:"Puebla"},
      {num: 21, name: "22",est:"Queretaro"},
      {num: 22, name: "23",est:"Quintana Roo"},
      {num: 23, name: "24",est:"San Luis Potosi"},
      {num: 24, name: "25",est:"Sinaloa"},
      {num: 25, name: "26",est:"Sonora"},
      {num: 26, name: "27",est:"Tabasco"},
      {num: 27, name: "28",est:"Tamaulipas"},
      {num: 28, name: "29",est:"Tlaxcala"},
      {num: 29, name: "30",est:"Veracruz de Ignacio de la Llave"},
      {num: 30, name: "31",est:"Yucatan"},
      {num: 31, name: "32",est:"Zacatecas"},
  ];

private datossub: Subscription = new Subscription;
  constructor(private httpClient:HttpClient) { }
  peticion(){
    this.httpClient.get('/getIne')
    .subscribe(res=>{
      this.inegi=res;

      type ObjectKey = keyof typeof this.inegi;
      const myVar = 'resultado' as ObjectKey;
      console.log(this.inegi[myVar]);
      this.variable = this.inegi[myVar].toString();
      this.inegi2=this.inegi[myVar];

      type ObjectKey1 = keyof typeof this.inegi2;
      const myVar1 = 'datos' as ObjectKey1;
      //console.log(this.inegi2[myVar1]);
      this.variable = this.inegi2[myVar1].toString();
      this.inegi3=this.inegi2[myVar1];
      console.log(JSON.stringify(this.inegi3));



    })
  }
  toNumber(){
    this.levelNum = +this.levelNum;
    console.log(this.levelNum);
  }

  selectedLevel = this.levels[0];

  ngOnInit(): void {
  }

}
