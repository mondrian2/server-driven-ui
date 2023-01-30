import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteOneComponent } from './componente-one.component';

describe('ComponenteOneComponent', () => {
  let component: ComponenteOneComponent;
  let fixture: ComponentFixture<ComponenteOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponenteOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponenteOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
