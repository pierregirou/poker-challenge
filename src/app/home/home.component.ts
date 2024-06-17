import { Component } from '@angular/core';
import { AppComponent } from '../app.component';
import { CustomMaterialModule } from '../custom-material/custom-material.module';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ 
    AppComponent, 
    CustomMaterialModule,
    RouterModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  titre:string
  constructor(private appComponent:AppComponent){}
  ngOnInit(){
    this.titre =this.appComponent.title
  }
}
