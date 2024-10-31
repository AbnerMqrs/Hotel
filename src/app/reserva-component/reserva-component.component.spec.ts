import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservaComponentComponent } from './reserva-component.component';

describe('ReservaComponentComponent', () => {
  let component: ReservaComponentComponent;
  let fixture: ComponentFixture<ReservaComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReservaComponentComponent]
    });
    fixture = TestBed.createComponent(ReservaComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
