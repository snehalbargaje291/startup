import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelleraddComponent } from './selleradd.component';

describe('SelleraddComponent', () => {
  let component: SelleraddComponent;
  let fixture: ComponentFixture<SelleraddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelleraddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SelleraddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
