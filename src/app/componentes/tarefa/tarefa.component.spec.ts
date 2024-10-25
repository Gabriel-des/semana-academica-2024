import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarefaComponent } from './tarefa.component';

describe('TarefaComponent', () => {
  let component: TarefaComponent;
  let fixture: ComponentFixture<TarefaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TarefaComponent]
    });
    fixture = TestBed.createComponent(TarefaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
