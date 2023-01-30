import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-componente-tree',
  templateUrl: './componente-tree.component.html',
  styleUrls: ['./componente-tree.component.scss']
})
export class ComponenteTreeComponent {
  @Input() data: any;
}
