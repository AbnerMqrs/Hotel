import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroQuartosComponentComponent } from './cadastro-quartos-component.component';

describe('CadastroQuartosComponentComponent', () => {
  let component: CadastroQuartosComponentComponent;
  let fixture: ComponentFixture<CadastroQuartosComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastroQuartosComponentComponent]
    });
    fixture = TestBed.createComponent(CadastroQuartosComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
