import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-componente-one',
  templateUrl: './componente-one.component.html',
  styleUrls: ['./componente-one.component.scss']
})
export class ComponenteOneComponent {
  @Input() data: any;
}
