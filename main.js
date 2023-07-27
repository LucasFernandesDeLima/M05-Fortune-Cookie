const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
const fortuneCookie = document.querySelector('.fortune-cookie')
const luckyMessage = document.querySelector('.lucky-message')
const btnReset = document.querySelector('#btnReset')

fortuneCookie.addEventListener('click', hendleOpenFortuneCookie)
btnReset.addEventListener('click', hendleResetClick)
window.addEventListener('keydown', hendleResetKeyDown)

function hendleOpenFortuneCookie() {
  toggleScreen()
  printLuckyMessage()
}

function hendleResetClick() {
  toggleScreen()
}

function hendleResetKeyDown(event) {
  const fortuneCookieIsOpen = screen1.classList.contains('hide')
  if (fortuneCookieIsOpen && event.key == 'Enter') {
    toggleScreen()
  }
}

function printLuckyMessage() {
  const messages = [
    `Se alguém está tão cansado que não possa te dar um sorriso,
    deixa-lhe o teu`,
    'A vida trará coisas boas se tiver paciência!',
    'Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.',
    'Não compense na ira o que lhe falta na razão.',
    'Defeitos e virtudes são apenas dois lados da mesma moeda.',
    'A maior de todas as torres começa no solo.',
    'Não há que ser forte. Há que ser flexível.',
    'Todos os dias organiza os seus cabelos, por que não faz o mesmo com o coração?',
    'Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida.',
    'A juventude não é uma época da vida, é um estado de espírito.',
    'Podemos escolher o que semear, mas somos obrigados a colher o que plantamos.',
    'Dê toda a atenção á formação dos seus filhos, sobretudo com bons exemplos da sua própria vida.',
    'Siga os bons e aprenda com eles.',
    'Não importa o tamanho da montanha, ela não pode tapar o sol.',
    'O bom-senso vale mais do que muito conhecimento.',
    'Quem quer colher rosas tem de estar preparado para suportar os espinhos.',
    'São os nossos amigos que nos ensinam as mais valiosas lições.',
    'Aquele que se importa com o sentimento dos outros, não é um tolo.',
    'A adversidade é um espelho que reflete o verdadeiro eu.',
    'Lamentar aquilo que não temos é desperdiçar aquilo que já possuímos.',
    'Amizade e Amor são coisas que se unem num piscar de olhos.',
    'Faça pequenas coisas hoje e coisas maiores lhe serão confiadas amanhã.',
    'A paciência na adversidade é sinal de um coração sensível.',
    'A sorte favorece a mente bem preparada.',
    'A sorte favorece a mente bem preparada.',
    'As pessoas esquecerão o que você disse e o que você fez… mas nunca esquecerão como se sentiram.',
    'Se você se sente só é porque construiu muros ao invés de pontes.',
    'O amor está sempre mais próximo do que você imagina.',
    'Pare de procurar eternamente; a felicidade está mesmo aqui ao seu lado.',
    'O nosso primeiro e último amor é… o amor-próprio.',
    'A maior barreira para o sucesso é o medo do fracasso.',
    'O pessimista vê a dificuldade em cada oportunidade; O otimista vê a oportunidade em cada dificuldade.',
    'O insucesso é apenas uma oportunidade para recomeçar de novo com mais experiência.',
    'Coragem é a resistência ao medo, domínio do medo, e não a ausência do medo.',
    'Quem quer vencer um obstáculo deve armar-se da força do leão e da prudência da serpente.',
    'A adversidade desperta em nós capacidades que, em circunstâncias favoráveis, teriam ficado adormecidas.',
    'Motivação não é sinónimo de transformação, mas um passo em sua direção.',
    'O que empobrece o ser humano, não é a falta de dinheiro, mais sim, a falta de fé,motivação e criatividade.',
    'Não acredite mais em pessoas especiais, mas em momentos especiais com pessoas normais.'
  ]

  const luckyNumber = Math.floor(Math.random() * messages.length)
  luckyMessage.innerText = messages[luckyNumber]
}

function toggleScreen() {
  screen1.classList.toggle('hide')
  screen2.classList.toggle('hide')
}
