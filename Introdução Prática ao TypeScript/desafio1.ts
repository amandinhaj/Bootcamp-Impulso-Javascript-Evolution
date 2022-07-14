// Desafio 1 - Introdução Prática ao TypeScript

/*
// Como podemos rodar isso em um arquivo .ts sem causar erros? 

let employee = {};
employee.code = 10;
employee.name = "John";
*/

// Minha resolução (com alguns acrescemos):

enum office{
    Estágiario,
    Supervisor,
    Gerente

}

interface Employee{
    code: number;
    name: string;
    married: boolean;
    cargo: office

}

let employee1: Employee = {
    code: 1,
    name: 'Bruna',
    married: false,
    cargo: office.Estágiario
}

let employee2: Employee = {
    code: 2,
    name: 'Marina',
    married: true,
    cargo: office.Supervisor
}

let employee3: Employee = {
    code: 3,
    name: 'Amanda',
    married: false,
    cargo: office.Gerente
}