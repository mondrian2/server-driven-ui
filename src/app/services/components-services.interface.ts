import {ComponentItem} from "../interfaces/component-item";
import {ViewContainerRef} from "@angular/core";

export interface ComponentsServicesInterface {
  generateComponent(componentItem: ComponentItem, ref: ViewContainerRef): void;
  getComponents(ref: ViewContainerRef): void;
}
