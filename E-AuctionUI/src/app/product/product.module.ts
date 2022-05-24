import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {DateAdapter, MAT_DATE_LOCALE, MatNativeDateModule} from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatPaginatorModule} from '@angular/material/paginator';


import {CreateComponent} from './create/create.component';

import {DetailsComponent} from './details/details.component';
import {ProductRoutingModule} from './product-routing.module';

import {ImageCropperModule} from 'ngx-image-cropper';
import {DateAdapter as CustomDateAdapter} from '../core/date-adapter';
import {SharedModule} from '../shared/shared.module';
import {CoreModule} from '../core/core.module';

@NgModule({
  declarations: [CreateComponent, DetailsComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatButtonModule,
    ProductRoutingModule,
    MatPaginatorModule,
    SharedModule,
    ImageCropperModule,
    CoreModule,
  ],
  exports: [],
  providers: [
    {provide: DateAdapter, useClass: CustomDateAdapter},
    {provide: MAT_DATE_LOCALE, useValue: 'bg-BG'}
  ]
})
export class ProductModule {
}
