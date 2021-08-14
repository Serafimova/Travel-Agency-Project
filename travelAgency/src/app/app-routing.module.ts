import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';
import { AuthGuardService } from './core/auth-guard.service';
import { FaqComponent } from './faq/faq.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CatalogComponent } from './offers/catalog/catalog.component';
import { CreateComponent } from './offers/create/create.component';
import { DetailsComponent } from './offers/details/details.component';
import { TermsComponent } from './terms/terms.component';
import { LoginComponent } from './user/login/login.component';
import { MyOffersComponent } from './user/my-offers/my-offers.component';
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
  {
    path: 'create',
    component: CreateComponent,
    canActivate: [AuthGuardService],
    data: {
      needAuthentication: true,
      agentProfile: true,
      URLToRedirect: '/user/login'
    }
  },
  {
    path: 'catalog',
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: CatalogComponent
      },
      {
        path: ':offerId',
        component: DetailsComponent,
        canActivate: [AuthGuardService],
        data: {
          needAuthentication: true,
          URLToRedirect: '/user/login'
        }
      },
      // {
      //   path: 'create',
      //   component: CreateComponent,
      //   canActivate: [AuthGuardService],
      //   data: {
      //     needAuthentication: true,
      //     agentProfile: true,
      //     URLToRedirect: '/user/login'
      //   }
      // }
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
        component: LoginComponent,
        canActivate: [AuthGuardService],
        data: {
          needAuthentication: false,
          URLToRedirect: '/'
        }
      },
      {
        path: 'register',
        component: RegisterComponent,
        canActivate: [AuthGuardService],
        data: {
          needAuthentication: false,
          URLToRedirect: '/'
        }
      },
      {
        path: 'profile',
        component: ProfileComponent,
        canActivate: [AuthGuardService],
        data: {
          needAuthentication: true,
          URLToRedirect: '/user/login'
        }
      },
      {
        path: 'reservations',
        component: ReservationsComponent,
        canActivate: [AuthGuardService],
        data: {
          needAuthentication: true,
          URLToRedirect: '/user/login',
        }
      },
        {
        path: 'myOffers',
        component: MyOffersComponent,
        canActivate: [AuthGuardService],
        data: {
          needAuthentication: true,
          URLToRedirect: '/user/login',
          agentProfile: true,
        }
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
