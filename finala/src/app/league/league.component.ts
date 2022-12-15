import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { YouTubePlayerModule } from "@angular/youtube-player";
@Component({
  selector: 'app-league',
  templateUrl: './league.component.html',
  styleUrls: ['./league.component.css']
})


export class LeagueComponent implements OnInit {
  league!:object;
  league2!:any;
  league3!:any;
  variable: string = "";
  champ!:object;
  champ2!:any;
  champ3!:any;
  videos: string = "";
  links: any;
  selectedLevel="Aatrox";
  campeones!:any;
  constructor(private httpClient:HttpClient) { }
  peticion(){
    this.httpClient.get('/getLeague')
    .subscribe(res=>{
      this.league=res;

      type ObjectKey = keyof typeof this.league;
      const myVar = 'resultado' as ObjectKey;
      //console.log(this.league[myVar]);
      this.league2 = this.league[myVar];

      type ObjectKey1 = keyof typeof this.league2.data;
      console.log(Object.keys(this.league2.data));
      this.campeones = Object.keys(this.league2.data);



    })
  }
  peticionchamp(){
    this.httpClient.get('/getChamp?q='+this.selectedLevel)
    .subscribe(res=>{
      this.champ=res;

      type ObjectKey = keyof typeof this.champ;
      const myVar = 'resultado' as ObjectKey;
      //console.log(this.champ[myVar]);
      this.champ2 = this.champ[myVar];

      type ObjectKey1 = keyof typeof this.champ2;
      const myVar1 = 'items' as ObjectKey1;
      //console.log(this.inegi2[myVar1]);
      this.variable = this.champ2[myVar1];
      this.champ3=this.champ2[myVar1];
      //console.log(this.champ3);

      var array = this.champ3;
      //var xd = array.map((x: any) => JSON.stringify(x))
      let result = [];
      let ids = [];
      for(let item of this.champ3){
        result.push(item.id);
        //console.log(item.id);
        type ObjectKey2 = keyof typeof item.id;
        const myVar2 = 'videoId' as ObjectKey2;
        //console.log(this.inegi2[myVar1]);
        this.videos = item.id[myVar2];
        //console.log(this.videos)
        ids.push(this.videos)
      }
      this.links = ids;
      //console.log(this.links);
      console.log(this.links);
    })
  }
  ngOnInit(): void {
    this.peticionchamp();
    this.peticion();
  
  }

}
