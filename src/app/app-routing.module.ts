import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PompeComponent } from './components/pompe/pompe.component';
import { PumpDetailsComponent } from './components/pompe/pump-details/pump-details.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'pompe',
    component: PompeComponent,
  },
  {
    path: 'pompe/:id', // 'id' is the route parameter
    component: PumpDetailsComponent, // Replace 'ChildComponent' with the actual component for your child route
  },
  {
    path: 'pistoale',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
