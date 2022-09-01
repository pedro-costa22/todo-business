export class Negociacao {
     constructor(
        private _data: Date,
        public readonly quantidade: number, 
        public readonly valor: number){
    }


    get volume(): number{
        return this.quantidade * this.valor;
    }

    get data(): Date {
        return this._data;
    }

    public static criaDe(dataString: string, quantidadeString: string, valorString: string): Negociacao{
        const exp: RegExp = /-/g;
        const date = new Date(dataString.replace(exp, ','));
        const quantidade = parseInt(quantidadeString);
        const valor = parseFloat(valorString);

        return new Negociacao(
            date,
            quantidade,
            valor
        );
    }
    
};

