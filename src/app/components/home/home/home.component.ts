import { Component, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { PortfolioServiceService } from '../../../services/portfolio-service.service';
import { CarouselModule } from 'primeng/carousel';
import { NavComponent } from '../nav/nav.component';

@Component({
  selector: 'app-home',
  imports: [TableModule, CarouselModule, NavComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  public coins: any = [
    {
      coin: 'BTC',
      quantity: 0.4,
      pru: 25000,
      price: 100000,
      beneficePercentage: 40,
      beneficeDollar: 400,
      titre: 'titre',
    },
    {
      coin: 'ETH',
      quantity: 6,
      pru: 3000,
      price: 4000,
      beneficePercentage: 40,
      beneficeDollar: 400,
      titre: 'titre2',
    },
  ];

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
    // this.portfolioService.getCoins().subscribe((res) => {
    //   // this.coins = res;
    //   console.log(res);
    // });
  }
}
