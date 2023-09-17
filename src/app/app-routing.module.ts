import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { AboutComponent } from './about/about.component';
import { ChatComponent } from './chat/chat.component';
import { FichierComponent } from './fichier/fichier.component';

const routes: Routes = [
  { path: '', redirectTo: '/accueil', pathMatch: 'full' },
  { path : 'accueil',component : AccueilComponent},
  {path : 'connexion',component : ConnexionComponent},
  {path : 'inscription',component : InscriptionComponent},
  {path : 'about',component : AboutComponent},
  { path: 'chat',component: ChatComponent},
  { path: 'fichier',component: FichierComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
