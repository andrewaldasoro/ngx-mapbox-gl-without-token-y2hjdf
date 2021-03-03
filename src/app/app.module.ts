import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { NgxMapboxGLModule } from "ngx-mapbox-gl";

import { AppComponent } from "./app.component";

@NgModule({
  imports: [BrowserModule, FormsModule, NgxMapboxGLModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
