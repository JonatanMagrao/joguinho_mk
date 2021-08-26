class Character {
    constructor(nome) {
        this.nome = nome
        this.vida = 100
        this.ataques = {
            soco: 10,
            soco_forte: 15,
            chute: 20,
            chute_forte: 30
        }
    }

    atacar(p, golpe) {

        let defesa = Math.round(Math.random() * 100)
        const msgBox = document.getElementById('msg')

        //Se o personagem defender o golpe, ele mantem os pontos de vida, se não, ele perde os pontos de vida
        if (defesa % 2 == 0) {
            msgBox.innerHTML = `<u>${p.nome}</u> defendeu o ataque de <u>${this.nome}</u> e continua com <b>${p.vida}</b> pontos de vida!`
            console.log(`Pontos de vida de ${p.nome}: ${p.vida}`)
        } else {
            let vida = p.vida -= this.ataques[golpe]
            msgBox.innerHTML = `<u>${p.nome}</u> recebeu um <em>${golpe.replace('_', ' ')}</em> de <u>${this.nome}</u> e perdeu <b>${this.ataques[golpe]}</b> pontos de vida!`
            console.log(`Pontos de vida de ${p.nome}: ${vida}`)

            //Se os pontos do adversário foram zerados, é feito o anúncio do vencedor
            if (p.vida <= 0) {
                msgBox.innerHTML = `${this.nome} venceu a luta!`
                document.getElementById('vencedorContainer').style.display = 'block'
                document.getElementById('vencedor').innerHTML = `${this.nome.toUpperCase()} É O VENCEDOR!`
            }
            return vida

        }
    }
}

const p1 = new Character('Kabal')
const p2 = new Character('Jax')

const p1Nome = document.getElementById('p1_nome').innerHTML = p1.nome
const p2Nome = document.getElementById('p2_nome').innerHTML = p2.nome

function again() {
    location.reload()
}