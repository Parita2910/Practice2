import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContentBoxComponent } from './content-box/content-box.component';
import { ContentListComponent } from './content-list/content-list.component';
import { ContentTypePipe } from './content-type.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ContentBoxComponent,
    ContentListComponent,
    ContentTypePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
