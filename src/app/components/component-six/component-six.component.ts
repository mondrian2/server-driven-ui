import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-component-six',
  templateUrl: './component-six.component.html',
  styleUrls: ['./component-six.component.scss']
})
export class ComponentSixComponent {
  @Input() data: any;
}
