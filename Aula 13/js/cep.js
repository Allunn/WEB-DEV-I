class Cep{
    constructor(cep, rua, cidade, estado, bairro, ibge){
        this.cep = cep;
        this. rua = rua;
        this. cidade = cidade;
        this. estado = estado;
        this. bairro = bairro;
        this. ibge = ibge;
    }

toString(i){
        return  "Cep: " + this.cep +
                "<br>Rua: " + this.rua +
                "<br>Cidade: " + this.cidade +
                "<br>Estado: " + this.estado +
                "<br>Bairro: " + this.bairro +
                "<br>Ibge: " + this.ibge + "<hr>"
    }}