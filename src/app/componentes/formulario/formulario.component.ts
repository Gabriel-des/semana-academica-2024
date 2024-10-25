import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { STATUS_OPTIONS } from 'src/app/constants/statusOptions.const';
import { statusOptionStatus } from 'src/app/enums/statusOptionsStatus.enum';
import { StatusTarefa } from 'src/app/interfaces/status-tarefa';
import { Tarefa } from 'src/app/interfaces/tarefa';
import { TarefaService } from 'src/app/servicos/tarefa.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit{

	public formulario!: FormGroup;
	public statusOptions: Array<StatusTarefa> = STATUS_OPTIONS;

	constructor(
		private formBuilder: FormBuilder,
		private tarefaService: TarefaService,
		private router: Router
	) {}

	public ngOnInit(): void {
		this.criarFormulario();
	}

	private criarFormulario(): void {
		this.formulario = this.formBuilder.group({
			tarefa: ['', Validators.compose([
				Validators.required,
				Validators.minLength(3)
			])],
			descricao: ['', Validators.compose([
				Validators.required,
				Validators.maxLength(255)
			])],
			status: ['', Validators.required]
		});
	}

	public criarTarefa(): void {
		if (this.formulario.valid) {
			let tarefa: Tarefa = this.montarTarefa();
			this.tarefaService.criar(tarefa).subscribe(() => {
				this.router.navigate(['/listarTarefas']);
			});
		}
	}

	private montarTarefa(): Tarefa {
		let tarefa: Tarefa = {
			id: null,
			status: this.statusOptions.find(status => status.id == this.formulario.get('status')?.value) as StatusTarefa,
			descricao: this.formulario.get('descricao')?.value,
			tarefa: this.formulario.get('tarefa')?.value,
			finalizada: this.verifyStatusValue()
		}

		return tarefa;
	}

	private verifyStatusValue(): boolean {
		return this.formulario.get('status')?.value == statusOptionStatus.Finalizado || 
		this.formulario.get('status')?.value == statusOptionStatus.Cancelado 
		? true 
		: false;
	}

	public habilitarBotao(): string {
		if(this.formulario.valid)
			return "botao"
	  
		return "botao__desabilitado"
	}

	public cancelar(): void {
		this.router.navigate(['/listarTarefas']);
	}
}
