import { FormsComponent } from './Components/forms/forms.component';
import { ButtonsComponent } from './Components/buttons/buttons.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { CardsComponent } from './Components/cards/cards.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'buttons', component:ButtonsComponent},
  {path:'cards', component:CardsComponent},
  {path:'forms', component: FormsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
