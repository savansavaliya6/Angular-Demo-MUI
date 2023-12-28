import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  carts: any[];

  constructor(private AuthService: AuthService) { }

  ngOnInit(): void {

    this.AuthService.Getdatalist().subscribe((res) => {
      this.carts = res.products

    })
  }

}
