import { RouterModule, Routes } from '@angular/router';
import { NgModule }      from '@angular/core';

import { HomeComponent }  from './routes/home/home.component';
import { ManagerComponent }  from './routes/manager/manager.component';
import { Page2 }  from './routes/page2/page2.component';

const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'meeting-manager', component: ManagerComponent },
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