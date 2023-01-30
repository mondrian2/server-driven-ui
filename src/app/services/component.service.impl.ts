import {Injectable, ViewContainerRef} from '@angular/core';
import {filter, map, of} from "rxjs";
import {COMPONENTS} from "../mocks/components";
import {ComponentItem} from "../interfaces/component-item";
import {CONFIG_COMPONENTS} from "../config/config";
import {ComponentData} from "../interfaces/component-data";
import { ComponentsServicesInterface} from "./components-services.interface";

@Injectable({
  providedIn: 'root'
})
export class ComponentServiceImpl implements ComponentsServicesInterface {
  generateComponent(componentItem: ComponentItem, ref: ViewContainerRef):void{
    ref
      .createComponent<ComponentData>(componentItem.component)
      .instance
      .data = componentItem.data
  }
  getComponents(ref: ViewContainerRef): void{
    of(COMPONENTS)
      .pipe(map(response => {

        CONFIG_COMPONENTS.map(c => response.map(s => {

          const isValid = s.component === c.component.toString()
              .replace('class ', '')
              .replace(' {}', '')
            && s.status === true

          if(isValid) {
            this.generateComponent({
              data: s.data,
              component: c.component,
              status: s.status
            }, ref);
          }
        }))
      })).subscribe()
  }
}
