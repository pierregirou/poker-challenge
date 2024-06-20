import { Component, OnInit } from '@angular/core';
import { CustomMaterialModule } from '../custom-material/custom-material.module';

@Component({
  selector: 'app-poker-room',
  standalone: true,
  imports: [
    CustomMaterialModule
  ],
  templateUrl: './poker-room.component.html',
  styleUrl: './poker-room.component.css'
})
export class PokerRoomComponent implements OnInit{
  constructor(){}

  ngOnInit(){

  }
}
