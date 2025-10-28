import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CombineLatest_ } from './combine-latest_.component';

describe('CombineLatest', () => {
  let component: CombineLatest_;
  let fixture: ComponentFixture<CombineLatest_>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CombineLatest_]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CombineLatest_);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
