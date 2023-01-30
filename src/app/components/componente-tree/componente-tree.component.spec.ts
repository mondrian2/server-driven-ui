import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteTreeComponent } from './componente-tree.component';

describe('ComponenteTreeComponent', () => {
  let component: ComponenteTreeComponent;
  let fixture: ComponentFixture<ComponenteTreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponenteTreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponenteTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
