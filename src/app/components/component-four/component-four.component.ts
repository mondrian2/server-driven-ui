import {Component, Injectable, Input} from '@angular/core';

@Component({
  selector: 'app-component-four',
  templateUrl: './component-four.component.html',
  styleUrls: ['./component-four.component.scss']
})
@Injectable({
  providedIn: "root"
})
export class ComponentFourComponent {
  @Input() data: any;

}
