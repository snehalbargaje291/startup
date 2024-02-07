import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Last3Component } from './last3.component';

describe('Last3Component', () => {
  let component: Last3Component;
  let fixture: ComponentFixture<Last3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Last3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Last3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
