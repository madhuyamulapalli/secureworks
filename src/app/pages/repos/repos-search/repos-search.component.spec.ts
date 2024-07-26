import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepoSearchComponent } from './repos-search.component';

describe('ReposComponent', () => {
  let component: RepoSearchComponent;
  let fixture: ComponentFixture<RepoSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RepoSearchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RepoSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
