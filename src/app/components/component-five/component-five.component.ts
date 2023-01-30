import {Component, Injectable, Input} from '@angular/core';

@Component({
  selector: 'app-component-five',
  templateUrl: './component-five.component.html',
  styleUrls: ['./component-five.component.scss']
})
@Injectable({
  providedIn: "root"
})
export class ComponentFiveComponent {
  @Input() data: any;

}
