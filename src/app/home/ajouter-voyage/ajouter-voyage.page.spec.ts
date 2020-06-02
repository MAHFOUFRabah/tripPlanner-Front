import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AjouterVoyagePage } from './ajouter-voyage.page';

describe('AjouterVoyagePage', () => {
  let component: AjouterVoyagePage;
  let fixture: ComponentFixture<AjouterVoyagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterVoyagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AjouterVoyagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
