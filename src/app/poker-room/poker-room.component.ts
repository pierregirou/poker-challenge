import { Component, OnInit } from '@angular/core';
import { CustomMaterialModule } from '../custom-material/custom-material.module';
import { RoomService } from '../services/room.service';

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
  rooms: any;
  displayedColumns: string[];
  pathImage:string ='';
  constructor(private roomsService:RoomService){}

  ngOnInit(){
    this.displayedColumns = ['id','logo','name','format','information','note'];
    this.getPokerRoom();
  }

  getPokerRoom() {
   this.roomsService.getPokerRomm().subscribe({
    next:(value)=>{
      console.log(value.response)
      this.rooms = value.response
    },
    error(err) {
      console.error(err)
    },
  })
  }
}
