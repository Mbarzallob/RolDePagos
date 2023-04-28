import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RolPagosComponent } from './rol-pagos.component';

describe('RolPagosComponent', () => {
  let component: RolPagosComponent;
  let fixture: ComponentFixture<RolPagosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RolPagosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RolPagosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
