import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ChallengeListeComponent } from './challenge-liste/challenge-liste.component';
import { ChallengeDetailComponent } from './challenge-detail/challenge-detail.component';
import { InformationComponent } from './information/information.component';
import { PokerRoomComponent } from './poker-room/poker-room.component';
import { UserComponent } from './user/user.component';
import { GestionUserComponent } from './gestion-user/gestion-user.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
    {
        path:'user', 
        component:GestionUserComponent,
        canActivate: [authGuard]
    },
    {
        path:'home', 
        component:HomeComponent
    },
    {
        path:'information', 
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
        component:UserComponent
    },
    {
        path:'user', 
        component:GestionUserComponent,
        canActivate: [authGuard]
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
