import { RouterModule, Routes } from '@angular/router';
import { NgModule }      from '@angular/core';

import { HomeComponent }  from './routes/home/home.component';
import { Page1 }  from './routes/page1/page1.component';
import { Page2 }  from './routes/page2/page2.component';

const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'page1', component: Page1 },
    { path: 'page2', component: Page2 },
    { path: '',   component: HomeComponent },
    { path: '**', component: HomeComponent },
    {path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
    imports:[ RouterModule.forRoot(appRoutes, { useHash: true }) ],
    exports: [ RouterModule ]
})
export class AppRouterModule {}