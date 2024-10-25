import { StatusTarefa } from "./status-tarefa";

export interface Tarefa {
    id: number | null;
    tarefa: string;
    descricao: string;
    status: StatusTarefa;
    finalizada: boolean;
}
