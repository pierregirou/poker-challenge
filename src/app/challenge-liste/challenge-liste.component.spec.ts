import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallengeListeComponent } from './challenge-liste.component';

describe('ChallengeListeComponent', () => {
  let component: ChallengeListeComponent;
  let fixture: ComponentFixture<ChallengeListeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChallengeListeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChallengeListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
