import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTwimpsComponent } from './my-twimps.component';

describe('MyTwimpsComponent', () => {
  let component: MyTwimpsComponent;
  let fixture: ComponentFixture<MyTwimpsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyTwimpsComponent]
    });
    fixture = TestBed.createComponent(MyTwimpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
