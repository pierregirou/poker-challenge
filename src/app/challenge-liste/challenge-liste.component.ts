import { Component, OnInit } from '@angular/core';
import { ChallengeService } from '../services/challenge.service';
import { CommonModule } from '@angular/common';
import { CustomMaterialModule } from '../custom-material/custom-material.module';
import { Router } from '@angular/router';
import { SearchChallengePipe } from '../pipes/search-challenge.pipe';

@Component({
  selector: 'app-challenge-liste',
  standalone: true,
  imports: [
    CommonModule,
    CustomMaterialModule,
    SearchChallengePipe
  ],
  templateUrl: './challenge-liste.component.html',
  styleUrl: './challenge-liste.component.css'
})
export class ChallengeListeComponent implements OnInit {

  challenges:any;
  constructor(private challengeService:ChallengeService, private router:Router){}

  ngOnInit(){
   this.challenges = this.challengeService.getAllChallengePulic()
  }

  gotoChallengeById(id:number) {
    console.log(id)
      this.router.navigate([`challengeListe/`,id])
    }

}
