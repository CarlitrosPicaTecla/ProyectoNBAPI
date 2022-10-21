import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Player } from 'src/app/interfaces/player.interface';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {

  playerList: Player[] = [];
  displayedColumns: string[] = ['nombre', 'equipo', 'posicion', 'altura', 'peso', 'pais'];
  datos = new MatTableDataSource();
  
  @ViewChild(MatPaginator) paginator: MatPaginator = {} as MatPaginator;
  @ViewChild(MatSort) sort: MatSort = {} as MatSort;
  
  
  constructor(private playerService: PlayerService) { }
  
  ngOnInit(): void {
    this.playerService.getPlayers(2022).subscribe(respuesta => {
      this.playerList = [...respuesta.league.standard, ...respuesta.league.africa, ...respuesta.league.sacramento, ...respuesta.league.utah, ...respuesta.league.vegas];
      this.datos.data = this.playerList;      
      this.datos.paginator = this.paginator;
      this.datos.sort = this.sort;
    });
    console.log(this.datos)
  }

  aplicarFiltro(evento: Event) {
    const filtro = (evento.target as HTMLInputElement).value;
    this.datos.filter = filtro.trim().toLowerCase();
  }

}
