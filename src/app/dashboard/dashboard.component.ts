import { Component } from '@angular/core';
import { CustomMaterialModule } from '../custom-material/custom-material.module';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    RouterModule,
    CustomMaterialModule
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  constructor(){}

}
