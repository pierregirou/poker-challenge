import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ChallengeListeComponent } from './challenge-liste/challenge-liste.component';
import { ChallengeDetailComponent } from './challenge-detail/challenge-detail.component';
import { InformationComponent } from './information/information.component';
import { PokerRoomComponent } from './poker-room/poker-room.component';
import { UserComponent } from './user/user.component';
import { GestionUserComponent } from './gestion-user/gestion-user.component';
import { authGuard } from './guards/auth.guard';
import { SettingComponent } from './setting/setting.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PasswordForgotComponent } from './password-forgot/password-forgot.component';
import { RGPDComponent } from './rgpd/rgpd.component';

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
        path:'dashboard', 
        component:DashboardComponent,
        canActivate: [authGuard]
    },
    {
        path:'setting', 
        component:SettingComponent
    },
    {
        path:'notfound', 
        component:NotfoundComponent
    },
    {
        path:'rgpd', 
        component:RGPDComponent
    },
    {
        path:'passwordforgot', 
        component:PasswordForgotComponent
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: 'notfound',
        pathMatch: 'full'
    }
];
