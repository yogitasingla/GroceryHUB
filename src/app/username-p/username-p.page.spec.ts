import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UsernamePPage } from './username-p.page';

describe('UsernamePPage', () => {
  let component: UsernamePPage;
  let fixture: ComponentFixture<UsernamePPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsernamePPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UsernamePPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
