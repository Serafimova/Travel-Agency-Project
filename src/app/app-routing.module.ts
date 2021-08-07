import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';
import { FaqComponent } from './faq/faq.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CatalogComponent } from './offers/catalog/catalog.component';
import { CreateComponent } from './offers/create/create.component';
import { DetailsComponent } from './offers/details/details.component';
import { TermsComponent } from './terms/terms.component';
import { LoginComponent } from './user/login/login.component';
import { ProfileComponent } from './user/profile/profile.component';
import { RegisterComponent } from './user/register/register.component';
import { ReservationsComponent } from './user/reservations/reservations.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  // {
  //   path: 'catalog',
  //   component: CatalogComponent
  // },
  {
    path: 'catalog',
    children: [
      {
        path: '',
        pathMatch:'full',
        component: CatalogComponent
      },
      {
        path: 'details',
        component: DetailsComponent
      },
      {
        path: 'create',
        component: CreateComponent
      }
      // {
      //   path: 'profile',
      //   component: ProfileComponent
      // },
      // {
      //   path: 'reservations',
      //   component: ReservationsComponent
      // },
    ]
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contacts',
    component: ContactsComponent
  },
  {
    path: 'faq',
    component: FaqComponent
  },
  {
    path: 'terms',
    component: TermsComponent
  },
  {
    path: 'user',
    children: [
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'register',
        component: RegisterComponent
      },
      {
        path: 'profile',
        component: ProfileComponent
      },
      {
        path: 'reservations',
        component: ReservationsComponent
      },
    ]
  },
  {
    path: '**',
    component: NotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
