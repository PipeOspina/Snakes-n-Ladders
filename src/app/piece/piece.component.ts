import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-piece',
  templateUrl: './piece.component.html',
  styleUrls: ['./piece.component.css']
})

export class PieceComponent implements OnInit {
  static readonly  SNAKE: number = 0;
  static readonly LADDER: number = 1;
  static readonly    ANY: number = null;

  private _indicator: number;
  private _linkIndicator: PieceComponent;
  private _linkAfter: PieceComponent;

  private _number: number;

  constructor(linkAfter: PieceComponent, linkIndicator?: PieceComponent, indicator?: number) {
    this._indicator = indicator || null;
    this._linkAfter = linkAfter;
    this._linkIndicator = linkIndicator || null;
  }

  get indicator(): number {
    return this._indicator;
  }

  set indicator(indicator: number) {
    if(indicator != 0 && indicator != 1) this._indicator = null
    else this._indicator = indicator;
  }

  get linkIndicator(): PieceComponent {
    return this._linkIndicator;
  }

  set linkIndicator(linkIndicator: PieceComponent) {
    this._linkIndicator = linkIndicator;
  }

  get linkAfter(): PieceComponent {
    return this._linkAfter;
  }

  set linkAfter(linkAfter: PieceComponent) {
    this._linkAfter = linkAfter;
  }

  public insert(): PieceComponent{
    this._linkAfter = new PieceComponent(this._linkAfter);
    return this;
  }

  ngOnInit() {
  }

}
