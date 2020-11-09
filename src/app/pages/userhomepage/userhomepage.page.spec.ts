import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UserhomepagePage } from './userhomepage.page';

describe('UserhomepagePage', () => {
  let component: UserhomepagePage;
  let fixture: ComponentFixture<UserhomepagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserhomepagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UserhomepagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
