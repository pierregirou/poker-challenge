import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ChallengeService } from '../services/challenge.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-challenge-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './challenge-detail.component.html',
  styleUrl: './challenge-detail.component.css'
})
export class ChallengeDetailComponent implements OnInit {
  // get id for searsh information
  idChallenge:any;
  challenge:Array<any>;
  constructor(
    private route:ActivatedRoute, 
    private router:Router,
    private challengeService:ChallengeService
    ){}

  ngOnInit(): void {
    if(this.route.snapshot.paramMap.get('id')){
      this.idChallenge = this.route.snapshot.paramMap.get('id');
      this.challengeService.getChallengeById(this.idChallenge).subscribe({
        next:(value)=>{
          this.challenge = value
        },
        error:(e)=>console.error(e)
      })
    }else{
      this.router.navigateByUrl('notfoound');
    }
  }
}
