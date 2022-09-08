import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { CookiesService } from './services/cookies.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  columnDefs: any[] = [];
  rowData: any[] = [];
  users: any;
  cookiesData: Subscription;

  constructor(private api: CookiesService) {}

  ngOnInit(): void {
    this.columnDefs = [
      { field: 'category', sortable: true },
      { field: 'name', sortable: true },
      { field: 'price', sortable: true },
    ];


    this.cookiesData = this.api.get().subscribe((res) => {
      this.users = res;
      this.rowData = this.users.cookies;
      console.log('data response', this.users);
    });
  }
}
