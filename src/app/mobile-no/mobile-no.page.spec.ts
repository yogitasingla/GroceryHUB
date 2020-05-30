import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MobileNoPage } from './mobile-no.page';

describe('MobileNoPage', () => {
  let component: MobileNoPage;
  let fixture: ComponentFixture<MobileNoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileNoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MobileNoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
