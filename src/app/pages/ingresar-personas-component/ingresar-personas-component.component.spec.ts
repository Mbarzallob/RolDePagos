import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresarPersonasComponentComponent } from './ingresar-personas-component.component';

describe('IngresarPersonasComponentComponent', () => {
  let component: IngresarPersonasComponentComponent;
  let fixture: ComponentFixture<IngresarPersonasComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngresarPersonasComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IngresarPersonasComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
