import { Component, OnInit } from '@angular/core';
import { TeamService } from 'src/app/services/team.service';
import { Team } from 'src/app/interfaces/team.interface';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css'],
})
export class TeamListComponent implements OnInit {
  teamList: Team[] = [];
  year : number = 2022;
  constructor(private teamservice: TeamService) {}

  ngOnInit(): void {
    this.getTeam(this.year)
  }

  getTeam(year: number) {
   
      this.teamservice.getTeam(year).subscribe((resp) => {
        this.teamList = [ ...resp.league.standard];
        //this.teamList = [...resp.league.africa, ...resp.league.sacramento, ...resp.league.standard, ...resp.league.utah, ...resp.league.vegas];

      });
  }

  showImg(team : Team){
    let id = team.teamId;
      return `https://cdn.nba.com/logos/nba/${id}/global/L/logo.svg`;
  }
}
