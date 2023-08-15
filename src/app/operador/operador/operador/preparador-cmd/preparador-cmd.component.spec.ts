import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreparadorCMDComponent } from './preparador-cmd.component';

describe('PreparadorCMDComponent', () => {
  let component: PreparadorCMDComponent;
  let fixture: ComponentFixture<PreparadorCMDComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PreparadorCMDComponent]
    });
    fixture = TestBed.createComponent(PreparadorCMDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
