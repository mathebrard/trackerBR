import { Component, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { PortfolioServiceService } from '../../../services/portfolio-service.service';
import { CarouselModule } from 'primeng/carousel';
import { NavComponent } from '../nav/nav.component';
import { HttpClientModule } from '@angular/common/http';
import { Coin } from '../../../models/coins';

@Component({
  selector: 'app-home',
  imports: [TableModule, CarouselModule, NavComponent, HttpClientModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  public coins: Coin[] = [];

  items = [
    {
      title: 'Bitcoin',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWc-OjffrnH_evPd-49v8XxFi9MpiSK9rhDg&s',
      description: 'Cryptocurrency leader',
    },
    {
      title: 'Ethereum',
      image: 'https://s2.coinmarketcap.com/static/img/coins/200x200/1027.png',
      description: 'Smart contracts platform',
    },
    {
      title: 'Cardano',
      image: 'assets/images/cardano.png',
      description: 'Proof of stake blockchain',
    },
    {
      title: 'Polkadot',
      image: 'assets/images/polkadot.png',
      description: 'Multi-chain technology',
    },
  ];

  constructor(private portfolioService: PortfolioServiceService) {}

  ngOnInit() {
    this.portfolioService.getCoins().subscribe((coins) => {
      this.coins = coins;

      // Récupération des prix pour chaque coin
      this.coins.forEach((coin) => {
        this.portfolioService.getCoinPrice(coin.ticker).subscribe((res) => {
          if (res?.data?.quote?.USD?.price) {
            coin.price = res.data.quote.USD.price;
            coin.beneficeDollar =
              coin.price * coin.quantity - coin.pru * coin.quantity;
            coin.beneficePercentage =
              (coin.price * coin.quantity) / (coin.pru * coin.quantity);
          }
        });
      });
    });
  }
}
