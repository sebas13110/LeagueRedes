import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NasaComponent } from './nasa/nasa.component';
import { InegiComponent } from './inegi/inegi.component';
import { LeagueComponent } from './league/league.component';
import { AgenteComponent } from './agente/agente.component';

const routes: Routes = [
  {path: 'nasa', component: NasaComponent},
  {path: 'inegi', component: InegiComponent},
  {path: 'league', component: LeagueComponent},
  {path: 'agente', component: AgenteComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
