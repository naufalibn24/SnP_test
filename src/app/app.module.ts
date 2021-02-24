import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { VideosComponent } from './components/content/videos/videos.component';
import { PeopleComponent } from './components/content/people/people.component';
import { ActivityComponent } from './components/sidebar/activity/activity.component';
import { ChannelsComponent } from './components/sidebar/channels/channels.component';
import { DocumentsComponent } from './components/content/documents/documents.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BreadcrumbComponent,
    VideosComponent,
    PeopleComponent,
    ActivityComponent,
    ChannelsComponent,
    DocumentsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
