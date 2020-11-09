import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ApphomepagePage } from './apphomepage.page';

describe('ApphomepagePage', () => {
  let component: ApphomepagePage;
  let fixture: ComponentFixture<ApphomepagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApphomepagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ApphomepagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
