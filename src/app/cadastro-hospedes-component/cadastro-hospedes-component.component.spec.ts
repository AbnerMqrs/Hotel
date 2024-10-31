import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroHospedesComponentComponent } from './cadastro-hospedes-component.component';

describe('CadastroHospedesComponentComponent', () => {
  let component: CadastroHospedesComponentComponent;
  let fixture: ComponentFixture<CadastroHospedesComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastroHospedesComponentComponent]
    });
    fixture = TestBed.createComponent(CadastroHospedesComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
