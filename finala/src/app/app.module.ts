import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ServicioService } from './servicio.service';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { InegiComponent } from './inegi/inegi.component';
import { NasaComponent } from './nasa/nasa.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LeagueComponent } from './league/league.component';
import { ChampComponent } from './champ/champ.component';
import { YouTubePlayerModule } from "@angular/youtube-player";
import { AgenteComponent } from './agente/agente.component';
import { MatSelect, MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatOptionModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MaterialModule } from './material/material.module';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InegiComponent,
    NasaComponent,
    LeagueComponent,
    ChampComponent,
    AgenteComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    YouTubePlayerModule,
    MatTabsModule,
    MatSelectModule,
    MaterialModule
  ],
  providers: [ServicioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
