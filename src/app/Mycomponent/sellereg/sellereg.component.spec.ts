import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelleregComponent } from './sellereg.component';

describe('SelleregComponent', () => {
  let component: SelleregComponent;
  let fixture: ComponentFixture<SelleregComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelleregComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SelleregComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
