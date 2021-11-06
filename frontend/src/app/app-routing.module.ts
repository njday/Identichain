import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import { NgModule } from '@angular/core';
import { DashboardPageComponent } from './pages/dashboard/containers';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import {AuthGuard} from './pages/auth/guards';
import {CreateCaseComponent} from "./pages/create-case/create-case/create-case.component";
import {SearchListingComponent} from "./pages/search/search-listing/search-listing.component";
import {EmailThreadComponent} from "./pages/email-thread/email-thread/email-thread.component";
import {CaseDetailComponent} from "./pages/case-detail/case-detail/case-detail.component";

const routes: Routes = [
  {
    path: 'case/new',
    pathMatch: 'full',
    canActivate: [AuthGuard],
    component: CreateCaseComponent
  },
  {
    path: 'dashboard',
    pathMatch: 'full',
    canActivate: [AuthGuard],
    component: DashboardPageComponent
  },
  {
    path: 'search',
    pathMatch: 'full',
    canActivate: [AuthGuard],
    component: SearchListingComponent
  },
  {
    path: 'case/detail',
    pathMatch: 'full',
    canActivate: [AuthGuard],
    component: CaseDetailComponent
  },
  {
    path: 'check/email',
    pathMatch: 'full',
    canActivate: [AuthGuard],
    component: EmailThreadComponent
  },
  {
    path: '404',
    component: NotFoundComponent
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: '**',
    redirectTo: '404'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
    useHash: true,
    preloadingStrategy: PreloadAllModules,
    relativeLinkResolution: 'legacy'
})
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
