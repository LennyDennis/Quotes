export class Quote {
    showDetails:boolean;
    constructor(public myquote: string,public author:string,public person: string, public postTime: Date){
        this.showDetails = true;
    }
}

