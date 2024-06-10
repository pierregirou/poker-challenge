import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminitrateurComponent } from './adminitrateur.component';

describe('AdminitrateurComponent', () => {
  let component: AdminitrateurComponent;
  let fixture: ComponentFixture<AdminitrateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminitrateurComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminitrateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
