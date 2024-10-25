import { Component, OnInit } from '@angular/core';
import { Tarefa } from 'src/app/interfaces/tarefa';
import { TarefaService } from 'src/app/servicos/tarefa.service';

@Component({
  selector: 'app-listar-tarefas',
  templateUrl: './listar-tarefas.component.html',
  styleUrls: ['./listar-tarefas.component.scss']
})
export class ListarTarefasComponent implements OnInit {

	public listaTarefas: Array<Tarefa> = [];
	public haMaisTarefas: boolean = true;
	private pagina: number = 1;

	constructor(
		private tarefaService: TarefaService
	) {}

	public ngOnInit(): void {
		this.buscarTarefas();
	}

	public carregarMaisTarefas(): void {
		this.incrementarPaginaAtual();
		this.atualizarListaTarefas();
	}

	private buscarTarefas(): void {
		this.tarefaService.listarTarefas().subscribe((tarefas: Tarefa[]) => {
			this.listaTarefas = tarefas;
		});
	}

	private incrementarPaginaAtual(): void {
		this.pagina++;
	}

	private atualizarListaTarefas(): void {
		this.tarefaService.listarTarefas(this.pagina).subscribe((listaTarefasNovaPagina: Tarefa[]) => {
			this.checarSeExistemMaisTarefas(listaTarefasNovaPagina);
			this.listaTarefas.push(...listaTarefasNovaPagina);
		});
	}

	private checarSeExistemMaisTarefas(listaTarefasNovaPagina: Tarefa[]): void {
		if (!listaTarefasNovaPagina.length)
			this.atualizarEstadoBotaoVerMais(false);
	}

	private atualizarEstadoBotaoVerMais(estado: boolean): void {
		this.haMaisTarefas = estado;
	}

}
