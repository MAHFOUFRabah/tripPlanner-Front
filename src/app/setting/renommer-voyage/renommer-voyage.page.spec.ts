import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RenommerVoyagePage } from './renommer-voyage.page';

describe('RenommerVoyagePage', () => {
  let component: RenommerVoyagePage;
  let fixture: ComponentFixture<RenommerVoyagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RenommerVoyagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RenommerVoyagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
