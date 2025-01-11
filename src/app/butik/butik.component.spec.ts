import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButikComponent } from './butik.component';

describe('ButikComponent', () => {
  let component: ButikComponent;
  let fixture: ComponentFixture<ButikComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ButikComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
