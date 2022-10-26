import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialsImportModule } from './materials-import/materials-import.module';
import { TeamListComponent } from './components/team-list/team-list.component';
import { LandingComponent } from './components/landing/landing.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PlayerListComponent } from './components/player-list/player-list.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TeamInfoComponent } from './components/team-info/team-info.component';
import { PlayerInfoComponent } from './components/player-info/player-info.component';
import { TeamCardComponent } from './components/team-card/team-card.component';

@NgModule({
  declarations: [
    AppComponent,
    TeamListComponent,
    LandingComponent,
    NotFoundComponent,
    PlayerListComponent,
    TeamInfoComponent,
    PlayerInfoComponent,
    TeamCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialsImportModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
