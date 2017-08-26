import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';

import { BlogComponent } from './components/blog/blog.component';
import { ContactComponent } from './components/contact/contact.component';
import { ServicesComponent } from './components/services/services.component';

import { routing } from './app.routing';

@NgModule({
  imports:      [ BrowserModule, routing, FormsModule ],
  declarations: [ AppComponent, HeaderComponent, MainComponent, SidebarComponent, FooterComponent, BlogComponent, ContactComponent, ServicesComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
