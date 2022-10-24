import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Player } from 'src/app/interfaces/player.interface';
import { Team } from 'src/app/interfaces/team.interface';
import { PlayerService } from 'src/app/services/player.service';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-team-info',
  templateUrl: './team-info.component.html',
  styleUrls: ['./team-info.component.css']
})
export class TeamInfoComponent implements OnInit {

  idLink : string='';

  yearLink : number = {} as number ;

  teamSelect : Team = {} as Team;

  teamList : Team[] = []; 

  teamPlayerList : Player[] = [];

  playerList : Player[]= [];

  currentYear = 2022;

  years : number[] = [2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022];

  constructor(private route: ActivatedRoute, private teamService : TeamService, private playerservice : PlayerService) { }

  ngOnInit(): void {
    this.getParams();
    this.getTeamInfo(this.yearLink);
    this.getPlayersOfTeam(this.yearLink);
    this.showImg(this.idLink);
  }

  getTeamInfo(year:number){
    this.teamService.getTeam(this.yearLink).subscribe(res =>{

      this.teamList = res.league.standard;

      for(let team of this.teamList){
        if(this.idLink == team.teamId){
          this.teamSelect = team;
        }
      }
    });

  }

  getParams(){
    this.route.params.subscribe(params =>{
      this.idLink = params['id'];
      this.yearLink = params['year'];
    });
    
  }

getPlayersOfTeam(year : number){
  
  this.playerservice.getPlayers(year).subscribe(res =>{
    this.playerList = res.league.standard;

    for(let player of this.playerList){
      if(player.teamId == this.idLink){
        this.teamPlayerList.push(player);
      }
    }
  });

}

showImg(idLogo : string){
  
    return `https://cdn.nba.com/logos/nba/${idLogo}/global/L/logo.svg`;
}
getPlayerImg(jugador: Player) {
  return `https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${jugador.personId}.png`
}

choseSelect(year: number) {
  this.currentYear = year;
  this.cargarJugadores(year);
}

cargarJugadores(year: number) {
  this.playerservice.getPlayers(year).subscribe(respuesta => {
    this.playerList = respuesta.league.standard;
    this.teamService.getTeam(year).subscribe(respuesta => {
      this.teamList = respuesta.league.standard;
    })
    
  });

}

}
