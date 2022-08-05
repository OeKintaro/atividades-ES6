class List{
    constructor(){
        this.data = []
    }

    add(nome){
        this.data.push(nome);
        console.log(this.data);
    }
}

class BetterList extends List{
    constructor(){
        super();
        this.usuario = 'Aluno';
    }

    getUsuario(){
        console.log(this.usuario);
    }

    static soma(x,y){
        return x+y;
    }
}

const list = new BetterList();
const button = document.getElementById('add');
let x = 0;

button.addEventListener('click', () => {
    list.getUsuario();
    list.add(`Aluno${x}`);
    x++;
});

//não funciona 
//const nome = 'Maria';
//nome = 'Mariana';

//alternativas:
//const info = {nome: 'Maria'}
//info.nome = 'Mariana';

//const nome = ['Maria'];
//nome[0] = 'Mariana';

//ou utilizar as keywords var ou let que permitem uma reatribuição à variável.