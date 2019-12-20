import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { MenuoneComponent } from './menuone/menuone.component';
import { MenutwoComponent } from './menutwo/menutwo.component';
import { MenuthreeComponent } from './menuthree/menuthree.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuoneComponent,
    MenutwoComponent,
    MenuthreeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: '', component: MenuoneComponent },
      { path: 'menuone', component: MenuoneComponent },
      { path: 'menutwo', component: MenutwoComponent },
      { path: 'menuthree', component: MenuthreeComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
