import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { Item } from 'src/types/main';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  http = inject(HttpClient);

  items: Item[] = [];

  updateItems(data: Item[]) {
    this.items = data;
  }

  ngOnInit() {
    this.http
      .get<Item[]>('https://api.escuelajs.co/api/v1/products?offset=0&limit=10')
      .subscribe((data) => {
        this.updateItems(data);
      });
  }
}
