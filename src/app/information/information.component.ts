import { Component } from '@angular/core';
import { CustomMaterialModule } from '../custom-material/custom-material.module';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-information',
  standalone: true,
  imports: [
    CustomMaterialModule,
    RouterModule
  ],
  templateUrl: './information.component.html',
  styleUrl: './information.component.css'
})
export class InformationComponent {

}
