class Dispositivo{
    constructor(nome){
        this.nome = nome
        this.ligado = false
    }

    ligar(){
        if(this.ligado) {
            console.log(this.nome + ' ja ligado')
            return 
        }
    this.ligado = true
    }
    
    desligar(){
        if(!this.ligado){
            console.log(this.nome + ' já desligou')
            return
        }
    this.ligado = true
    }
}


let d1 = new Dispositivo('Celular')
d1.desligar()
console.log(d1)