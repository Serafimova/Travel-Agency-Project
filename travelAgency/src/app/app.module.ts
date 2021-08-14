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
import { TermsComponent } from './terms/terms.component';
import { OffersModule } from './offers/offers.module';
import { HttpClientModule } from '@angular/common/http';
import { FaqService } from './faq/faq.service';
import { FaqModule } from './faq/faq.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactsComponent,
    NotFoundComponent,
    TermsComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    UserModule,
    OffersModule,
    FaqModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [FaqService],
  bootstrap: [AppComponent]
})
export class AppModule { }
