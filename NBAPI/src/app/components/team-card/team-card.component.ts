import { Component, Input, OnInit } from '@angular/core';
import { Team } from 'src/app/interfaces/team.interface';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-team-card',
  templateUrl: './team-card.component.html',
  styleUrls: ['./team-card.component.css']
})
export class TeamCardComponent implements OnInit {
  teamList: Team[] = [];
  year : number = 2022;


  constructor(private teamservice: TeamService) { }

  @Input() teamCard: Team = {} as Team;
  ngOnInit(): void {
  }

  showImg(team : Team){
    let id = team.teamId;
      return `https://cdn.nba.com/logos/nba/${id}/global/L/logo.svg`;
  }
}
