// Desafio 2 - Introdução Prática ao TypeScript

/*
// Como podemos melhorar o esse código usando TS? 

let pessoa1 = {};
pessoa1.nome = "maria";
pessoa1.idade = 29;
pessoa1.profissao = "atriz"

let pessoa2 = {}
pessoa2.nome = "roberto";
pessoa2.idade = 19;
pessoa2.profissao = "Padeiro";

let pessoa3 = {
    nome: "laura",
    idade: "32",
    profissao: "Atriz"
};

let pessoa4 = {
    nome = "carlos",
    idade = 19,
    profissao = "padeiro"
}
*/

// Minha resolução:

enum Profissao{
    Atriz,
    Padeiro

}

type Pessoa = {
    nome: string,
    idade: number,
    profissao: Profissao

}

let serHum1: Pessoa = {
    nome:'Maria',
    idade: 29,
    profissao: Profissao.Atriz
}

let serHum2: Pessoa = {
    nome:'Roberto',
    idade: 19,
    profissao: Profissao.Padeiro
}

let serHum3: Pessoa = {
    nome:'Laura',
    idade: 32,
    profissao: Profissao.Atriz
}

let serHum4: Pessoa = {
    nome:'Carlos',
    idade: 19,
    profissao: Profissao.Padeiro
}