import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { MainComponent } from './main/main.component'

@NgModule({
  imports: [BrowserModule, AppRoutingModule],
  declarations: [AppComponent, MainComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
