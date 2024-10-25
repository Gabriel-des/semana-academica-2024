import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { STATUS_OPTIONS } from 'src/app/constants/statusOptions.const';
import { statusOptionStatus } from 'src/app/enums/statusOptionsStatus.enum';
import { StatusTarefa } from 'src/app/interfaces/status-tarefa';
import { Tarefa } from 'src/app/interfaces/tarefa';
import { TarefaService } from 'src/app/servicos/tarefa.service';

@Component({
	selector: 'app-tarefa',
	templateUrl: './tarefa.component.html',
	styleUrls: ['./tarefa.component.scss']
})
export class TarefaComponent {

	@Input() tarefa!: Tarefa;
	@ViewChild("select") select!: ElementRef<HTMLSelectElement>;
	public statusOptions: Array<StatusTarefa> = STATUS_OPTIONS;

	constructor(
		private tarefaService: TarefaService
	) { }

	excluirPensamento(): void {
		if (this.tarefa.id)
			this.tarefaService.excluir(this.tarefa.id).subscribe(() => {
				window.location.reload();
			});
	}

	async atualizarTarefa(): Promise<void> {
		await this.atualizarStatusTarefaLocal();
		await this.finalizarTarefaLocal();
		this.tarefaService.atualizarTarefa(this.tarefa).subscribe();
	}

	private atualizarStatusTarefaLocal(): void {
		let novoStatus: StatusTarefa = this.atualizarStatusTarefa();
		this.tarefa.status = novoStatus;
	}

	private finalizarTarefaLocal(): void {
		if (this.verificarSeTarefaDeveSerFinalizada())
			this.tarefa.finalizada = true;
	}

	private verificarSeTarefaDeveSerFinalizada(): boolean {
		return this.tarefa.status.id == statusOptionStatus.Finalizado || this.tarefa.status.id == statusOptionStatus.Cancelado;
	}

	private atualizarStatusTarefa(): StatusTarefa {
		return this.statusOptions.find(status => status.id === Number(this.select.nativeElement.value)) as StatusTarefa;
	}
}
