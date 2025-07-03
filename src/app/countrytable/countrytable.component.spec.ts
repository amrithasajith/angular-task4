import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountrytableComponent } from './countrytable.component';

describe('CountrytableComponent', () => {
  let component: CountrytableComponent;
  let fixture: ComponentFixture<CountrytableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountrytableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountrytableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
