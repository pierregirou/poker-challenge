import { Component } from '@angular/core';
import { CustomMaterialModule } from '../custom-material/custom-material.module';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CustomMaterialModule
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
