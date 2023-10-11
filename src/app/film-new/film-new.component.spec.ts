import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmNewComponent } from './film-new.component';

describe('FilmNewComponent', () => {
  let component: FilmNewComponent;
  let fixture: ComponentFixture<FilmNewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilmNewComponent]
    });
    fixture = TestBed.createComponent(FilmNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
