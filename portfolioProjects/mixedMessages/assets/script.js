const jogar = document.querySelector('#jogar');
const mensagem = document.querySelector('#mensagem');
const spanFrase = document.querySelector('#spanFrase');
const spanQualidade = document.querySelector('#qualidade');

const deuses = [
  {
    nome: 'Zeus',
    vulgo: 'Rei dos deuses',
  },
  {
    nome: 'Hera',
    vulgo: 'Deusa do casamento',
  },
  {
    nome: 'Poseidon',
    vulgo: 'Deus do mar',
  },
  {
    nome: 'Deméter',
    vulgo: 'Deusa da agricultura',
  },
  {
    nome: 'Atena',
    vulgo: 'Deusa da sabedoria',
  },
  {
    nome: 'Afrodite',
    vulgo: 'Deusa do amor',
  },
  {
    nome: 'Apolo',
    vulgo: 'Deus da música',
  },
  {
    nome: 'Ártemis',
    vulgo: 'Deusa da natureza',
  },
  {
    nome: 'Hermes',
    vulgo: 'Deus dos viejantes',
  },
  {
    nome: 'Dionísio',
    vulgo: 'Deus do vinho',
  },
  {
    nome: 'Hefesto',
    vulgo: 'Deus da forja',
  },
  {
    nome: 'Héstia',
    vulgo: 'Deusa da família',
  },
];
const qualidades = [
  'Justiça',
  'Lealdade',
  'Força',
  'Imprevisibilidade',
  'Sabedoria',
  'Inteligência',
  'Generosidade',
  'Beleza',
  'Amor',
  'Beleza',
  'Poesia',
  'Cura',
  'Proteção',
  'Agilidade',
  'Astúcia',
  'Loucura',
  'Excessos',
  'Habilidade',
  'Criatividade',
  'Acolhimento',
];
const frasesMotivacionais = [
  'Nunca subestime o seu poder e sua capacidade de liderança.',
  'Mantenha-se fiel aos seus compromissos e valores, mesmo nos momentos mais difíceis.',
  'Enfrente os desafios de frente e com coragem, mesmo que sejam tão imprevisíveis quanto as ondas do mar.',
  'Cultive seus sonhos com paciência e carinho, assim como se cultiva a terra.',
  'Invista em conhecimento e estratégia para alcançar seus objetivos com sabedoria.',
  'Acredite em seu próprio poder de sedução e ame a si mesmo antes de amar outra pessoa.',
  'Transforme suas dores em poesia e encontre a luz mesmo nas horas mais sombrias.',
  'Abra as asas e voe livre como um pássaro, mas nunca esqueça de proteger a si mesmo e aos outros.',
  'Seja rápido e ágil como o mensageiro dos deuses, mas nunca deixe de lado a honestidade e a ética.',
  'Deixe sua imaginação fluir livremente e aproveite a vida, mas com moderação e equilíbrio.',
  'Use sua criatividade para superar os desafios e forjar seu próprio caminho.',
  'Encontre conforto e calor em seu próprio lar e em si mesmo, para poder irradiar esse amor para o mundo.',
];

const sorteio = (arr) => {
  let num = Math.floor(Math.random() * arr.length);
  return arr[num];
};

const sorteiaElementos = (deuses, qualidades, frases) => {
  const deus = sorteio(deuses);
  const qualidade = sorteio(qualidades);
  const frase = sorteio(frases);
  const elementos = [deus.nome, deus.vulgo, qualidade, frase];
  return elementos;
};

function iniciaJogo() {
  const sorteados = sorteiaElementos(deuses, qualidades, frasesMotivacionais);
  const mensagemDeus = `${sorteados[0]} - ${sorteados[1]}`;
  const qualidade = `Qualidade: ${sorteados[2]}`;
  const frase = sorteados[3];
  mensagem.innerHTML = mensagemDeus;
  spanFrase.innerText = frase;
  spanQualidade.innerText = qualidade;
  return sorteados;
}

jogar.addEventListener('click', iniciaJogo);
