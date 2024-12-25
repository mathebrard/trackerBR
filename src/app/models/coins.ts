export class Coin {
  ticker: string;
  quantity: number;
  pru: number;
  price: number;
  beneficePercentage: number;
  beneficeDollar: number;

  constructor(ticker: string, quantity: number, pru: number, price: number) {
    this.ticker = ticker;
    this.quantity = quantity;
    this.pru = pru;
    this.price = price;
    this.beneficeDollar = this.price * this.quantity - this.pru * this.quantity;
    this.beneficePercentage =
      (this.price * this.quantity) / (this.pru * this.quantity);
  }

  
}
