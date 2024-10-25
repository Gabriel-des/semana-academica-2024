import { StatusTarefa } from "../interfaces/status-tarefa"

export const STATUS_OPTIONS: Array<StatusTarefa> = [
    {
        id: 1,
        status: 'Backlog'
    },
    {
        id: 2,
        status: 'Em andamento'
    },
    {
        id: 3,
        status: 'Em teste'
    },
    {
        id: 4,
        status: 'Finalizado'
    },
    {
        id: 5,
        status: 'Cancelado'
    }
];