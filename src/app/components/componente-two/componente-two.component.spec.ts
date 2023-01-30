import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteTwoComponent } from './componente-two.component';

describe('ComponenteTwoComponent', () => {
  let component: ComponenteTwoComponent;
  let fixture: ComponentFixture<ComponenteTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponenteTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponenteTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
