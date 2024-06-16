import { Component } from '@angular/core';
import { CustomMaterialModule } from '../custom-material/custom-material.module';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CustomMaterialModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  years:string|number;
  date:Date;

  ngOnInit(){
    this.date = new Date();
    this.years = this.date.getFullYear();
  }
}
