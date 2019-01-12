import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CapturaEvidenciaComponent } from './captura-evidencia.component';

describe('CapturaEvidenciaComponent', () => {
  let component: CapturaEvidenciaComponent;
  let fixture: ComponentFixture<CapturaEvidenciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapturaEvidenciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapturaEvidenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
