import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Tarefa } from '../interfaces/tarefa';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  private APITarefas: string = 'http://localhost:3000/tarefas';
  private numeroItensPorPagina: number = 8;

  constructor(
    private httpClient: HttpClient
  ) { }

  public listarTarefas(pagina: number = 1): Observable<Tarefa[]> {
    let httpParams = new HttpParams()
      .set("_page", pagina)
      .set("_limit", this.numeroItensPorPagina);

    return this.httpClient.get<Tarefa[]>(this.APITarefas, { params: httpParams });
  }

  public criar(tarefa: Tarefa): Observable<Tarefa> {
    return this.httpClient.post<Tarefa>(this.APITarefas, tarefa);
  }

  public excluir(id: number): Observable<Tarefa> {
    const url: string = `${this.APITarefas}/${id}`;
    return this.httpClient.delete<Tarefa>(url);
  }

  public atualizarTarefa(tarefa: Tarefa): Observable<Tarefa> {
    const url: string = `${this.APITarefas}/${tarefa.id}`;
    return this.httpClient.put<Tarefa>(url, tarefa);
  }
}
