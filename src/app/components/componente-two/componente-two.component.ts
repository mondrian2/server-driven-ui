import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-componente-two',
  templateUrl: './componente-two.component.html',
  styleUrls: ['./componente-two.component.scss']
})
export class ComponenteTwoComponent {
  @Input() data: any;
}
