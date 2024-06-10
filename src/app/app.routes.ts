import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ChallengeListeComponent } from './challenge-liste/challenge-liste.component';
import { ChallengeDetailComponent } from './challenge-detail/challenge-detail.component';
import { InformationComponent } from './information/information.component';
import { PokerRoomComponent } from './poker-room/poker-room.component';
import { AdminitrateurComponent } from './adminitrateur/adminitrateur.component';

export const routes: Routes = [
    {
        path:'home', 
        component:HomeComponent
    },
    {
        path:'informations', 
        component:InformationComponent
    },
    {
        path:'pokerRoom', 
        component:PokerRoomComponent
    },
    {
        path:'challengeListe', 
        component:ChallengeListeComponent
    },
    {
        path:'challengeListe/:id', 
        component:ChallengeDetailComponent
    },
    {
        path:'admin', 
        component:AdminitrateurComponent
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: 'home',
        pathMatch: 'full'
    }
];
