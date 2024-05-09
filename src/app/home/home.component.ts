import { Component } from '@angular/core';
import { AxiosService } from '../axios.service';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { StatisticsComponent } from '../statistics/statistics.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatButtonModule, MatCardModule, MatTabsModule, CommonModule, HeaderComponent, StatisticsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  data: string[] = [];
  
  constructor(private axiosService: AxiosService){ }

  ngOnInit(): void{
    this.axiosService.requestData(
      "GET",
      "/messages",
      {}
    ).then(
      (response) => this.data = response.data
    );
  }

}
