import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SuccesAjoutVoyagePage } from './succes-ajout-voyage.page';

describe('SuccesAjoutVoyagePage', () => {
  let component: SuccesAjoutVoyagePage;
  let fixture: ComponentFixture<SuccesAjoutVoyagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuccesAjoutVoyagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SuccesAjoutVoyagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
