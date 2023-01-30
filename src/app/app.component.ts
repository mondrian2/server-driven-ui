import {AfterContentInit, Component, ViewChild} from '@angular/core';
import {DynamicComponentDirective} from "./directives/dynamic-component.directive";
import {ComponentServiceImpl} from "./services/component.service.impl";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

})
export class AppComponent implements AfterContentInit{
  constructor(private srv: ComponentServiceImpl) {}
  @ViewChild(DynamicComponentDirective, { static: true }) dynamic!: DynamicComponentDirective;
  ngAfterContentInit():void {
    this.srv.getComponents(this.dynamic.viewContainerRef)
  }
}




