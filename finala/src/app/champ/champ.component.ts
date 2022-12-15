import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-champ',
  templateUrl: './champ.component.html',
  styleUrls: ['./champ.component.css']
})


export class ChampComponent implements OnInit {
  agente!:object;
  agente2!:any;
  agente3!:any;
  variable: string="";
  constructor(private httpClient:HttpClient) {}
  
  peticion(){
    this.httpClient.get('/getAgente')
    .subscribe(res=>{
      this.agente=res;

      type ObjectKey = keyof typeof this.agente;
      const myVar = 'resultado' as ObjectKey;
      console.log(this.agente[myVar]);
      this.agente2 = this.agente[myVar];

      type ObjectKey1 = keyof typeof this.agente2;
      const myVar1 = 'name' as ObjectKey1;
      //console.log(this.inegi2[myVar1]);
      this.variable = this.agente2[myVar1].toString();
      this.agente3=this.agente2[myVar1];
      console.log(JSON.stringify(this.agente3));
    })

    }
  ngOnInit(): void {
    this.peticion();
  }


}
