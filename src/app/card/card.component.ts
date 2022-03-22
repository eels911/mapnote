import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})

export class CardComponent implements OnInit {

  @Input()
  cardName = "Card name";
  @Input()
  number = "0000 0000 0000 0000"
  @Input()
  amount = "0000,00";
  @Input()
  expirationDate = "00/00"
  @Input()
  paymentSystem = "visa"

  isVisa:boolean = false;
  isMasterCard:boolean = false;

  constructor() {
  }

  ngOnInit(): void {
    this.isVisa = this.paymentSystem === "visa";
    this.isMasterCard = this.paymentSystem === "mastercard" || this.paymentSystem === "masterCard";
    this.makeSpacesInNumber();
  }

  private makeSpacesInNumber(): void {
    this.number = `
      ${this.number.slice(0, 4)}
      ${this.number.slice(4, 8)}
      ${this.number.slice(8, 12)}
      ${this.number.slice(12, 16)}`;
  }
}
