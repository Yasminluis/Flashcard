function criaCartao(categoria, pergunta, resposta){
    let container = document.getElementById("container")
    let cartao = document.create.element("article")
    cartao.className = 'cartao'

    criaCartao.innerHTML =`
    <div class="cartao_conteudo">
         <h3>${categoria}<h/3> 
         <div class="cartao_conteudo_pergunta>
              <p> ${pergunta}</p>
        </div>
    <div class="cartao_conteudo_respostas">
    <p>${resposta}</p>
        </div>
    </div>

`
let respostaEstaVisivel = false 

function viraCartao  () {
    respostaEstaVisivel = !respostaEstaVisivel
    cartao.classList.toggle('active', respostaEstaVisivel)
}
cartao.addEventListener ('click' ,viraCartao) 

container.appendeChild(cartao)
}