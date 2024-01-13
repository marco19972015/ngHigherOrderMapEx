import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ConcatMapExampleComponent } from './concat-map-example/concat-map-example.component';
import { MergeMapExampleComponent } from './merge-map-example/merge-map-example.component';

@NgModule({
  declarations: [
    AppComponent,
    ConcatMapExampleComponent,
    MergeMapExampleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
