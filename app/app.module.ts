import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRouterModule } from './app-router.module';

import { NavbarComponent }  from './components/navbar/navbar.component';
import { FooterComponent }  from './components/footer/footer.component';

import { AppComponent }  from './app.component';
import { HomeComponent }  from './routes/home/home.component';
import { ManagerComponent }  from './routes/manager/manager.component';
import { Page2 }  from './routes/page2/page2.component';

@NgModule({

  imports: [
    BrowserModule,
    AppRouterModule
  ],

  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    ManagerComponent,
    Page2
  ],
  bootstrap: [
    AppComponent
  ],
})

export class AppModule { }