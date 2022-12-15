import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NasaModel } from './nasamodel';
import { map, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServicioService {
  private datos:NasaModel[]=[];
  private datosUpdated = new Subject<NasaModel[]>();

  constructor(private http: HttpClient) { }
  getdia(){
    this.http
      .get<{ datos: any[] }>('/getDatos')
      .pipe(
        map((NasaModelData)=>{
          return NasaModelData.datos.map((Nas)=>{
            return {
              copyright: Nas.copyright,
              date: Nas.date,
              explanation: Nas.explanation,
              hdurl: Nas.hdurl,
              media_type: Nas.media_type ,
              service_version: Nas.service_version,
              title: Nas.title,
              url: Nas.url,

            };
          });
        })
      )
      .subscribe((transformeddatos)=>{
        this.datos=transformeddatos;
        this.datosUpdated.next([...this.datos]);
      });
      }
      getdatosUpdateListener(){
        return this.datosUpdated.asObservable();
      }
  }

