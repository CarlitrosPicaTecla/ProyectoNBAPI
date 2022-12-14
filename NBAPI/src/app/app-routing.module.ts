import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PlayerInfoComponent } from './components/player-info/player-info.component';
import { PlayerListComponent } from './components/player-list/player-list.component';
import { StandingsComponent } from './components/standings/standings.component';
import { TeamInfoComponent } from './components/team-info/team-info.component';
import { TeamListComponent } from './components/team-list/team-list.component';

const routes: Routes = [
  {path: 'landing', component: LandingComponent},
  {path: '', redirectTo: '/landing', pathMatch: 'full'},
  {path: 'player-list', component: PlayerListComponent},
  {path: 'team-list', component: TeamListComponent},
  {path: 'player-info/:year/:id', component: PlayerInfoComponent},
  {path: 'team-info/:year/:id', component: TeamInfoComponent},
  {path: 'standings', component: StandingsComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
