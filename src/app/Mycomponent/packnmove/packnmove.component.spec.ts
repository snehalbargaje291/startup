import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacknmoveComponent } from './packnmove.component';

describe('PacknmoveComponent', () => {
  let component: PacknmoveComponent;
  let fixture: ComponentFixture<PacknmoveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PacknmoveComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PacknmoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
