import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';
import { UserModule } from './user/user.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { FaqComponent } from './faq/faq.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TermsComponent } from './terms/terms.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactsComponent,
    NotFoundComponent,
    FaqComponent,
    TermsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    UserModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
