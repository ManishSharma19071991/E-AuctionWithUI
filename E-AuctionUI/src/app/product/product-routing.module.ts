import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { AuthGuard } from '../shared/guards/auth.guard';
import { DetailsComponent } from './details/details.component';
import { OwnerGuard } from '../shared/guards/owner.guard';

const routes: Routes = [
  { path: 'create', component: CreateComponent },
  { path: 'bids', component: DetailsComponent },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule {
}
