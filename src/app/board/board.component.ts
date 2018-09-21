import { Component, OnInit } from '@angular/core';
import { PieceComponent } from 'src/app/piece/piece.component';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    let listaLigada = new PieceComponent(null);
    for(let i = 0; i < 60; i++)
      listaLigada.insert();
    console.log(listaLigada);
  }

}
