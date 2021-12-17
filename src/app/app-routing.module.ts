import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AlbumComponent } from './album/album.component';
import { CreateCardComponent } from './create-card/create-card.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
​import { DetailsComponent } from './details/details.component';
​import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  { path: '', component: AlbumComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'create', component: CreateCardComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'details/:id', component: DetailsComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
