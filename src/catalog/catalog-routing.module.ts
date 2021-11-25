import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CatalogComponent} from './catalog-list/catalog.component';
import {SongDetailsComponent} from './dialog/song-details/song-details.component';
import {AuthGuard} from '../auth/guard/auth.guard';


const catalogRoute: Routes = [
  {path: 'catalog', component: CatalogComponent, canActivate: [AuthGuard]},
  {path: 'catalog-song-detail/:id', component: SongDetailsComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(catalogRoute)],
  exports: [RouterModule]
})
export class CatalogRoutingModule {
}
