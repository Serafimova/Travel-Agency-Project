import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogComponent } from './catalog/catalog.component';
import { AppRoutingModule } from '../app-routing.module';
import { DetailsComponent } from './details/details.component';
import { CreateComponent } from './create/create.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CatalogComponent,
    DetailsComponent,
    CreateComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule
  ],
})
export class OffersModule { }
