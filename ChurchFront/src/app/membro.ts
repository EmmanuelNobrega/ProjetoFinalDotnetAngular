export class Membro {

    constructor(

      public name: string,
      public cpF: string,
      public dataNascimento: string,
      public email: string,
      private password: string,
      public id?: number,
      public telefone?: string,
      public endereco?: string
      
    ) {  }
  
  }
