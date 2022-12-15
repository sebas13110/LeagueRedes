import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { YouTubePlayerModule } from "@angular/youtube-player";

@Component({
  selector: 'app-agente',
  templateUrl: './agente.component.html',
  styleUrls: ['./agente.component.css']
})


export class AgenteComponent implements OnInit {
  agente!:object;
  agentes!:any;
  agente2!:any;
  agente3!:any;
  agente4!:any;
  variable: string="";
  variable2: string="";
  nombres!:any;
  charact!:any;
  charact2!:any;
  charact3!:any;
  videos: string = "";
  links: any;
  selectedLevel="Raze";

  constructor(private httpClient:HttpClient) {}
  
  peticion(){
    this.httpClient.get('/getAgente')
    .subscribe(res=>{
      this.agente=res;

      type ObjectKey = keyof typeof this.agente;
      const myVar = 'resultado' as ObjectKey;
      //console.log(this.agente[myVar]);
      this.agente2 = this.agente[myVar];
      //console.log(this.agente2.characters.name);
      
      let array = [];
      for(let item of this.agente2.characters){
        array.push(item.name);
      }
      this.agentes=array;
      console.log(array);
  })}
     
      
      
    
      /*type ObjectKey2 = keyof typeof this.agente3;
      const myVar2 = 'name' as ObjectKey2;
      this.variable2 = this.agente3[myVar2];
      this.agente4=this.agente3[myVar2];
      console.log(JSON.stringify(this.agente4));*/


      /*var array =this.agente3;
      let result=[];
      let ids=[];
      for(let characters of this.agente3){
        result.push(characters.id);
      type ObjectKey2 = keyof typeof characters.id;
      const myVar2 = 'name' as ObjectKey2;
      this.variable2 = characters.id[myVar2];
      ids.push(this.variable2);
      console.log(ids);
      //console.log(JSON.stringify(this.agente4));
    }

    console.log(this.nombres);
  })

    }*/
  
    peticionCharact(){
      this.httpClient.get('/getCharact?q='+this.selectedLevel)
      .subscribe(res=>{
        this.charact=res;
  
        type ObjectKey = keyof typeof this.charact;
        const myVar = 'resultado' as ObjectKey;
        //console.log(this.champ[myVar]);
        this.charact2 = this.charact[myVar];
  
        type ObjectKey1 = keyof typeof this.charact2;
        const myVar1 = 'items' as ObjectKey1;
        //console.log(this.inegi2[myVar1]);
        this.variable = this.charact2[myVar1];
        this.charact3=this.charact2[myVar1];
        //console.log(this.champ3);
  
        var array = this.charact3;
        //var xd = array.map((x: any) => JSON.stringify(x))
        let result = [];
        let ids = [];
        for(let item of this.charact3){
          result.push(item.id);
          //console.log(item.id);
          type ObjectKey2 = keyof typeof item.id;
          const myVar2 = 'videoId' as ObjectKey2;
          //console.log(this.inegi2[myVar1]);
          this.videos = item.id[myVar2];
          console.log(this.videos)
          ids.push(this.videos)
        }
        this.links = ids;
        //console.log(this.links);
        console.log(this.links);
      })
    }  


  ngOnInit(): void {
    this.peticion();
    this.peticionCharact();
  }


}
