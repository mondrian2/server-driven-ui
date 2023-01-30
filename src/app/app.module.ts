import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponenteOneComponent } from './components/componente-one/componente-one.component';
import { ComponenteTwoComponent } from './components/componente-two/componente-two.component';
import { ComponenteTreeComponent } from './components/componente-tree/componente-tree.component';
import { DynamicComponentDirective } from './directives/dynamic-component.directive';
import { ComponentFourComponent } from './components/component-four/component-four.component';
import { ComponentFiveComponent } from './components/component-five/component-five.component';
import { ComponentSixComponent } from './components/component-six/component-six.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";


@NgModule({
  declarations: [
    AppComponent,
    ComponenteOneComponent,
    ComponenteTwoComponent,
    ComponenteTreeComponent,
    ComponentFourComponent,
    ComponentFiveComponent,
    DynamicComponentDirective,
    ComponentSixComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatProgressSpinnerModule

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
