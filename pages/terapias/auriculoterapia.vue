<template>
  <div>



      <div class='main-four auriculoterapia' id="auriculoterapia">
        <div>
          <h4 ><Icon name="solar:alt-arrow-right-bold" />Auriculoterapia </h4>
      
          <h5 class="detail">
            Explore os incríveis benefícios da auriculoterapia!
          </h5>
          <h5>  
            A auriculoterapia concentra-se na estimulação de pontos específicos na 
            orelha para promover o equilíbrio energético e facilitar a autorregulação 
            do seu corpo.
            </h5>
            <h5>
            Amplamente pesquisada e praticada globalmente, a auriculoterapia oferece 
            uma ampla gama de vantagens.
             </h5>
        </div>
      </div>
       <a class="buttonAction" href="https://calendar.app.google/ymqxNr4rSBaRT7m59">
              <div>
                <Icon name="ph:calendar-plus-fill"/> Agendar
              </div>
            </a>
    <br>
    <br>
    <br>
    <br>

  </div>
</template>
<script>
export default {
  scrollToTop: true,
  transition: {
    name: 'page',
    mode: 'ease-in'
  },
  head: {
    title: 'Deep Acupuntura',
    htmlAttrs: {
      lang: 'pt-br'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { hid: 'keywords', name: 'description', content: 'Acupuntura' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'msapplication-TileColor', content: '#860d0d' },
      { name: 'theme-color', content: '#860d0d' }
    ],
    link: [
      { rel: 'apple-touch-icon', size: '180x180', href: '/img/MyLogoBoldFundo.png' },
      { rel: 'icon', type: 'image/png', size: '32x32', href: '/img/MyLogoBoldFundo.png' },
      { rel: 'icon', type: 'image/png', size: '16x16', href: '/img/MyLogoBoldFundo.png' },
      { rel: 'apple-touch-icon', size: '180x180', href: '/img/apple-touch-icon.png' },
      { rel: 'manifest', href: '/img/site.webmanifest' },
      { rel: 'mask-icon', href: '/img/safari-pinned-tab.svg', color: '#860d0d' }
    ]
  },
  data() {
    return {
      aplicar: '',
      output: '',
      aplicarAcu: '',
      aplicarAur: '',
      aplicarVen: '',
      aplicarForm: '',
      aplicarGua: '',
      aplicarCran: '',
      aplicarAcu: '',
      aplicarAur: '',
      aplicarVen: '',
      aplicar: '',
      aplicarTwo: '',
      aplicarTree: '',
      aplicarFour: '',
      aplicarFive: '',
      aplicarSix: '',
      aplicarSeven: '',
      aplicarEight: '',
      aplicarNine: '',
      aplicarTen: '',
      aplicarEleven: '',
      aplicarTwelve: '',
      aplicarThirteen: '',
      aplicarFourteen: '',
      rAnsiedade: 'Ansiedade',
      rDepressao: 'Depressão',
      rEstresse: 'Estresse',
      rCervicalgia: 'Cervicalgia',
      rLombalgia: 'Lombalgia',
      rEnxaqueca: 'Enxaqueca',
      rCefaleia: 'Cefaleia',
      rBaixaImunidade: 'Baixa Imunidade',
      rBurnout: 'Burnout',
      rLaringite: 'Laringite',
      rInsonia: 'Insônia',
      rZumbido: 'Zumbido',
      rLabirintite: 'Labirintite',
      rSinusite: 'Sinusite',
    }
  },
  methods: {
    acupuntura() {
      this.aplicarAcu = true,
        this.aplicarAur = false,
        this.aplicarVen = false,
        this.aplicarCran = false,
        this.aplicar = true,
        this.aplicarTwo = true,
        this.aplicarTree = true,
        this.aplicarFour = true,
        this.aplicarFive = true,
        this.aplicarSix = true,
        this.aplicarSeven = true,
        this.aplicarEight = true,
        this.aplicarNine = true,
        this.aplicarTen = true,
        this.aplicarEleven = true,
        this.aplicarTwelve = true,
        this.aplicarThirteen = true,
        this.aplicarFourteen = true,
        this.rAnsiedade = 'ansiedade',
        this.rDepressao = 'Depressão',
        this.rEstresse = 'Estresse',
        this.rCervicalgia = 'Cervicalgia',
        this.rLombalgia = 'Lombalgia',
        this.rEnxaqueca = 'Enxaqueca',
        this.rCefaleia = 'Cefaleia',
        this.rBaixaImunidade = 'Baixa Imunidade',
        this.rBurnout = 'Burnout',
        this.rLaringite = 'Laringite',
        this.rInsonia = 'Insônia',
        this.rZumbido = 'Zumbido',
        this.rLabirintite = 'Labirintite',
        this.rSinusite = 'Sinusite'
    },
    craniopuntura() {
      this.aplicarAcu = false,
        this.aplicarAur = false,
        this.aplicarVen = false,
        this.aplicarCran = true,
        this.aplicar = true,
        this.aplicarTwo = true,
        this.aplicarTree = true,
        this.aplicarFour = true,
        this.aplicarFive = true,
        this.aplicarSix = true,
        this.aplicarSeven = true,
        this.aplicarCran = true,
        this.aplicarEight = true,
        this.aplicarNine = true,
        this.aplicarTen = true,
        this.aplicarEleven = true,
        this.aplicarCran = true,
        this.aplicarTwelve = true,
        this.aplicarThirteen = true,
        this.aplicarFourteen = true,
        this.rAnsiedade = 'ansiedade',
        this.rDepressao = 'Depressão',
        this.rEstresse = 'Estresse',
        this.rCervicalgia = 'Cervicalgia',
        this.rLombalgia = 'Lombalgia',
        this.rEnxaqueca = 'Enxaqueca',
        this.rCefaleia = 'Cefaleia',
        this.rBaixaImunidade = 'Baixa Imunidade',
        this.rBurnout = 'Burnout',
        this.rLaringite = 'Laringite',
        this.rInsonia = 'Insônia',
        this.rZumbido = 'Zumbido',
        this.rLabirintite = 'Labirintite',
        this.rSinusite = 'Sinusite'
    },
    auriculo() {
      this.aplicarAur = true,
        this.aplicarAcu = false,
        this.aplicarVen = false,
        this.aplicar = true,
        this.aplicarCran = false,
        this.aplicarTwo = true,
        this.aplicarTree = true,
        this.aplicarFour = true,
        this.aplicarFive = true,
        this.aplicarSix = true,
        this.aplicarSeven = true,
        this.aplicarEight = true,
        this.aplicarNine = true,
        this.aplicarTen = true,
        this.aplicarEleven = true,
        this.aplicarTwelve = true,
        this.aplicarThirteen = true,
        this.aplicarFourteen = true,
        this.rAnsiedade = 'ansiedade',
        this.rDepressao = 'Depressão',
        this.rEstresse = 'Estresse',
        this.rCervicalgia = 'Cervicalgia',
        this.rLombalgia = 'Lombalgia',
        this.rEnxaqueca = 'Enxaqueca',
        this.rCefaleia = 'Cefaleia',
        this.rBaixaImunidade = 'Baixa Imunidade',
        this.rBurnout = 'Burnout',
        this.rLaringite = 'Laringite',
        this.rInsonia = 'Insônia',
        this.rZumbido = 'Zumbido',
        this.rLabirintite = 'Labirintite',
        this.rSinusite = 'Sinusite'
    },
    ventosa() {
      this.aplicarVen = true,
        this.aplicarCran = true,
        this.aplicarAcu = false,
        this.aplicarAur = false,
        this.aplicar = false,
        this.aplicarCran = false,
        this.aplicarTwo = false,
        this.aplicarTree = true,
        this.aplicarFour = true,
        this.aplicarFive = false,
        this.aplicarSix = false,
        this.aplicarSeven = false,
        this.aplicarEight = false,
        this.aplicarNine = false,
        this.aplicarTen = false,
        this.aplicarEleven = false,
        this.aplicarTwelve = false,
        this.aplicarThirteen = false,
        this.aplicarFourteen = false,
        this.rAnsiedade = 'ansiedade',
        this.rDepressao = 'Depressão',
        this.rEstresse = 'Estresse',
        this.rCervicalgia = 'Cervicalgia',
        this.rLombalgia = 'Lombalgia',
        this.rEnxaqueca = 'Enxaqueca',
        this.rCefaleia = 'Cefaleia',
        this.rBaixaImunidade = 'Baixa Imunidade',
        this.rBurnout = 'Burnout',
        this.rLaringite = 'Laringite',
        this.rInsonia = 'Insônia',
        this.rZumbido = 'Zumbido',
        this.rLabirintite = 'Labirintite',
        this.rSinusite = 'Sinusite'
    },
    ansiedade() {
      this.aplicarAcu = true,
        this.aplicarAur = true,
        this.aplicarCran = true,
        this.aplicarVen = false,
        this.aplicarGua = false,
        this.aplicarForm = false,
        this.aplicar = true,
        this.aplicarTwo = false,
        this.aplicarTree = false,
        this.aplicarFour = false,
        this.aplicarFive = false,
        this.aplicarSix = false,
        this.aplicarSeven = false,
        this.aplicarEight = false,
        this.aplicarNine = false,
        this.aplicarTen = false,
        this.aplicarEleven = false,
        this.aplicarTwelve = false,
        this.aplicarThirteen = false,
        this.aplicarFourteen = false,
        this.rDepressao = 'depressão',
        this.rAnsiedade = `<span><h4>Ansiedade</h4></span>
          <span class='white'>é um sentimento de inquietação e preocupação, geralmente generalizado e sem foco,
          como uma reação exagerada a uma situação que é apenas subjetivamente vista como ameaçadora.</span>`,
        this.rEstresse = 'Estresse',
        this.rCervicalgia = 'Cervicalgia',
        this.rLombalgia = 'Lombalgia',
        this.rEnxaqueca = 'Enxaqueca',
        this.rCefaleia = 'Cefaleia',
        this.rBaixaImunidade = 'Baixa Imunidade',
        this.rBurnout = 'Burnout',
        this.rLaringite = 'Laringite',
        this.rInsonia = 'Insônia',
        this.rZumbido = 'Zumbido',
        this.rLabirintite = 'Labirintite',
        this.rSinusite = 'Sinusite'
    },
    depressao() {
      this.aplicarAcu = true,
        this.aplicarAur = true,
        this.aplicarCran = true,
        this.aplicarVen = false,
        this.aplicarGua = false,
        this.aplicarForm = false,
        this.aplicar = false,
        this.aplicarTwo = true,
        this.aplicarTree = false,
        this.aplicarFour = false,
        this.aplicarFive = false,
        this.aplicarSix = false,
        this.aplicarSeven = false,
        this.aplicarEight = false,
        this.aplicarNine = false,
        this.aplicarTen = false,
        this.aplicarEleven = false,
        this.aplicarTwelve = false,
        this.aplicarThirteen = false,
        this.aplicarFourteen = false,
        this.rAnsiedade = 'ansiedade',
        this.rDepressao = `<span><h4>Depressão</h4></span>
          <span class='white'>é um transtorno mental caracterizado por tristeza profunda persistente
          e aversão a atividades. Pode afetar os pensamentos, comportamentos, sentimentos e o bem-estar de uma pessoa.</span>`,
        this.rEstresse = 'Estresse',
        this.rCervicalgia = 'Cervicalgia',
        this.rLombalgia = 'Lombalgia',
        this.rEnxaqueca = 'Enxaqueca',
        this.rCefaleia = 'Cefaleia',
        this.rBaixaImunidade = 'Baixa Imunidade',
        this.rBurnout = 'Burnout',
        this.rLaringite = 'Laringite',
        this.rInsonia = 'Insônia',
        this.rZumbido = 'Zumbido',
        this.rLabirintite = 'Labirintite',
        this.rSinusite = 'Sinusite'
    },
    estresse() {
      this.aplicarAcu = true,
        this.aplicarAur = true,
        this.aplicarVen = false,
        this.aplicarTwo = false,
        this.aplicarCran = false,
        this.aplicar = false,
        this.aplicarTree = false,
        this.aplicarFour = false,
        this.aplicarFive = true,
        this.aplicarSix = false,
        this.aplicarSeven = false,
        this.aplicarEight = false,
        this.aplicarNine = false,
        this.aplicarTen = false,
        this.aplicarEleven = false,
        this.aplicarTwelve = false,
        this.aplicarThirteen = false,
        this.aplicarFourteen = false,
        this.rAnsiedade = 'ansiedade',
        this.rDepressao = 'Depressão',
        this.rEstresse = `<span><h4>Estresse</h4></span>
          <span class='white'>É causado pela ansiedade e pela depressão devido à mudança brusca no
          estilo de vida e a exposição a um determinado ambiente, que leva a pessoa a sentir um determinado tipo de angústia. </span>`,
        this.rCervicalgia = 'Cervicalgia',
        this.rLombalgia = 'Lombalgia',
        this.rEnxaqueca = 'Enxaqueca',
        this.rCefaleia = 'Cefaleia',
        this.rBaixaImunidade = 'Baixa Imunidade',
        this.rBurnout = 'Burnout',
        this.rLaringite = 'Laringite',
        this.rInsonia = 'Insônia',
        this.rZumbido = 'Zumbido',
        this.rLabirintite = 'Labirintite',
        this.rSinusite = 'Sinusite'
    },
    cervicalgia() {
      this.aplicarAcu = true,
        this.aplicarAur = true,
        this.aplicarCran = false,
        this.aplicarVen = true,
        this.aplicarGua = true,
        this.aplicarForm = false,
        this.aplicar = false,
        this.aplicarCran = false,
        this.aplicarTwo = false,
        this.aplicarTree = true,
        this.aplicarFour = false,
        this.aplicarFive = false,
        this.aplicarSix = false,
        this.aplicarSeven = false,
        this.aplicarEight = false,
        this.aplicarNine = false,
        this.aplicarTen = false,
        this.aplicarEleven = false,
        this.aplicarTwelve = false,
        this.aplicarThirteen = false,
        this.aplicarFourteen = false,
        this.rAnsiedade = 'ansiedade',
        this.rDepressao = 'Depressão',
        this.rEstresse = 'Estresse',
        this.rCervicalgia = `<span><h4>Cervicalgia</h4></span>
          <span class='white'>Dor no pescoço e ombro que varia em intensidade, podendo ser incômoda ou
          como um choque elétrico desde o pescoço até o braço.</span>`,
        this.rLombalgia = 'Lombalgia',
        this.rEnxaqueca = 'Enxaqueca',
        this.rCefaleia = 'Cefaleia',
        this.rBaixaImunidade = 'Baixa Imunidade',
        this.rBurnout = 'Burnout',
        this.rLaringite = 'Laringite',
        this.rInsonia = 'Insônia',
        this.rZumbido = 'Zumbido',
        this.rLabirintite = 'Labirintite',
        this.rSinusite = 'Sinusite'
    },
    lombalgia() {
      this.aplicarAcu = true,
        this.aplicarAur = true,
        this.aplicarCran = false,
        this.aplicarVen = true,
        this.aplicarGua = true,
        this.aplicarForm = false,
        this.aplicar = false,
        this.aplicarTwo = false,
        this.aplicarTree = false,
        this.aplicarFour = true,
        this.aplicarFive = false,
        this.aplicarSix = false,
        this.aplicarSeven = false,
        this.aplicarEight = false,
        this.aplicarNine = false,
        this.aplicarTen = false,
        this.aplicarEleven = false,
        this.aplicarTwelve = false,
        this.aplicarThirteen = false,
        this.aplicarFourteen = false,
        this.rAnsiedade = 'ansiedade',
        this.rDepressao = 'Depressão',
        this.rEstresse = 'Estresse',
        this.rCervicalgia = 'Cervicalgia',
        this.rLombalgia = `<span><h4>Lombalgia</h4></span>
          <span class='white'>Uma condição dolorosa comum que afeta a parte inferior da coluna.
A dor lombar é causada por uma lesão em um músculo (tensão) ou ligamento (entorse). As causas comuns incluem
levantamento impróprio, má postura, falta de exercícios físicos regulares, fratura, disco rompido ou artrite.</span>`,
        this.rEnxaqueca = 'Enxaqueca',
        this.rCefaleia = 'Cefaleia',
        this.rBaixaImunidade = 'Baixa Imunidade',
        this.rBurnout = 'Burnout',
        this.rLaringite = 'Laringite',
        this.rInsonia = 'Insônia',
        this.rZumbido = 'Zumbido',
        this.rLabirintite = 'Labirintite',
        this.rSinusite = 'Sinusite'
    },
    enxaqueca() {
      this.aplicarAcu = true,
        this.aplicarAur = true,
        this.aplicarCran = true,
        this.aplicarVen = false,
        this.aplicarGua = false,
        this.aplicarForm = false,
        this.aplicar = false,
        this.aplicarTwo = false,
        this.aplicarTree = false,
        this.aplicarFour = false,
        this.aplicarFive = false,
        this.aplicarSix = true,
        this.aplicarSeven = false,
        this.aplicarEight = false,
        this.aplicarNine = false,
        this.aplicarTen = false,
        this.aplicarEleven = false,
        this.aplicarTwelve = false,
        this.aplicarThirteen = false,
        this.aplicarFourteen = false,
        this.rAnsiedade = 'ansiedade',
        this.rDepressao = 'Depressão',
        this.rEstresse = 'Estresse',
        this.rCervicalgia = 'Cervicalgia',
        this.rLombalgia = 'Lombalgia',
        this.rEnxaqueca = `<span><h4>Enxaqueca</h4></span>
          <span class='white'>Dor de cabeça de intensidade variável, muitas vezes acompanhada de náuseas e sensibilidade à luz e ao som.
Às vezes, as enxaquecas são precedidas por sintomas de alerta. Os gatilhos incluem alterações hormonais, certos alimentos e bebidas, estresse
e exercícios físicos.</span>`,
        this.rCefaleia = 'Cefaleia',
        this.rBaixaImunidade = 'Baixa Imunidade',
        this.rBurnout = 'Burnout',
        this.rLaringite = 'Laringite',
        this.rInsonia = 'Insônia',
        this.rZumbido = 'Zumbido',
        this.rLabirintite = 'Labirintite',
        this.rSinusite = 'Sinusite'
    },
    cefaleia() {
      this.aplicarAcu = true,
        this.aplicarAur = true,
        this.aplicarCran = true,
        this.aplicarVen = false,
        this.aplicarGua = false,
        this.aplicarForm = false,
        this.aplicar = false,
        this.aplicarTwo = false,
        this.aplicarTree = false,
        this.aplicarFour = false,
        this.aplicarFive = false,
        this.aplicarSix = false,
        this.aplicarSeven = true,
        this.aplicarCran = true,
        this.aplicarEight = false,
        this.aplicarNine = false,
        this.aplicarTen = false,
        this.aplicarEleven = false,
        this.aplicarTwelve = false,
        this.aplicarThirteen = false,
        this.aplicarFourteen = false,
        this.rAnsiedade = 'ansiedade',
        this.rDepressao = 'Depressão',
        this.rEstresse = 'Estresse',
        this.rCervicalgia = 'Cervicalgia',
        this.rLombalgia = 'Lombalgia',
        this.rEnxaqueca = 'Enxaqueca',
        this.rCefaleia = `<span><h4>Cefaléia</h4></span>
          <span class='white'>Uma sensação dolorosa em qualquer parte da cabeça,
          desde aguda até incômoda, podendo ocorrer junto com outros sintomas.</span>`,
        this.rBaixaImunidade = 'Baixa Imunidade',
        this.rBurnout = 'Burnout',
        this.rLaringite = 'Laringite',
        this.rInsonia = 'Insônia',
        this.rZumbido = 'Zumbido',
        this.rLabirintite = 'Labirintite',
        this.rSinusite = 'Sinusite'
    },
    baixaImunidade() {
      this.aplicarAcu = true,
        this.aplicarAur = true,
        this.aplicarCran = false,
        this.aplicarVen = false,
        this.aplicarGua = false,
        this.aplicarForm = true,
        this.aplicar = false,
        this.aplicarTwo = false,
        this.aplicarTree = false,
        this.aplicarFour = false,
        this.aplicarFive = false,
        this.aplicarSix = false,
        this.aplicarSeven = false,
        this.aplicarEight = true,
        this.aplicarNine = false,
        this.aplicarTen = false,
        this.aplicarEleven = false,
        this.aplicarTwelve = false,
        this.aplicarThirteen = false,
        this.aplicarFourteen = false,
        this.rAnsiedade = 'ansiedade',
        this.rDepressao = 'Depressão',
        this.rEstresse = 'Estresse',
        this.rCervicalgia = 'Cervicalgia',
        this.rLombalgia = 'Lombalgia',
        this.rEnxaqueca = 'Enxaqueca',
        this.rCefaleia = 'Cefaleia',
        this.rBaixaImunidade = `<span><h4>Baixa Imunidade</h4></span>
          <span class='white'>pode ser percebida quando o organismo dá alguns sinais, indicando que as defesas do organismo estão baixas e que o sistema imunológico não está sendo capaz de combater
          os agentes infecciosos, como vírus e bactérias, o que pode fazer com que a pessoa fique doente com mais frequência.</span>`,
        this.rBurnout = 'Burnout',
        this.rLaringite = 'Laringite',
        this.rInsonia = 'Insônia',
        this.rZumbido = 'Zumbido',
        this.rLabirintite = 'Labirintite',
        this.rSinusite = 'Sinusite'
    },
    burnOut() {
      this.aplicarAcu = true,
        this.aplicarAur = true,
        this.aplicarCran = false,
        this.aplicarVen = false,
        this.aplicarGua = false,
        this.aplicarForm = true,
        this.aplicar = false,
        this.aplicarTwo = false,
        this.aplicarTree = false,
        this.aplicarFour = false,
        this.aplicarFive = false,
        this.aplicarSix = false,
        this.aplicarSeven = false,
        this.aplicarEight = false,
        this.aplicarNine = true,
        this.aplicarTen = false,
        this.aplicarEleven = false,
        this.aplicarTwelve = false,
        this.aplicarThirteen = false,
        this.aplicarFourteen = false,
        this.rAnsiedade = 'ansiedade',
        this.rDepressao = 'Depressão',
        this.rEstresse = 'Estresse',
        this.rCervicalgia = 'Cervicalgia',
        this.rLombalgia = 'Lombalgia',
        this.rEnxaqueca = 'Enxaqueca',
        this.rCefaleia = 'Cefaleia',
        this.rBaixaImunidade = 'Baixa Imunidade',
        this.rBurnout = `<span><h4>Burnout</h4></span>
          <span class='white'>A síndrome de burnout é um distúrbio psíquico causado pela exaustão extrema, sempre relacionada ao trabalho de um indivíduo. Essa condição
          também é chamada de “síndrome do esgotamento profissional” e afeta quase todas as facetas da vida de um indivíduo.</span>`,
        this.rLaringite = 'Laringite',
        this.rInsonia = 'Insônia',
        this.rZumbido = 'Zumbido',
        this.rLabirintite = 'Labirintite',
        this.rSinusite = 'Sinusite'
    },
    laringite() {
      this.aplicarAcu = true,
        this.aplicarAur = true,
        this.aplicarCran = false,
        this.aplicarVen = false,
        this.aplicarGua = false,
        this.aplicarForm = false,
        this.aplicar = false,
        this.aplicarTwo = false,
        this.aplicarTree = false,
        this.aplicarFour = false,
        this.aplicarFive = false,
        this.aplicarSix = false,
        this.aplicarSeven = false,
        this.aplicarEight = false,
        this.aplicarNine = false,
        this.aplicarTen = true,
        this.aplicarEleven = false,
        this.aplicarTwelve = false,
        this.aplicarThirteen = false,
        this.aplicarFourteen = false,
        this.rAnsiedade = 'ansiedade',
        this.rDepressao = 'Depressão',
        this.rEstresse = 'Estresse',
        this.rCervicalgia = 'Cervicalgia',
        this.rLombalgia = 'Lombalgia',
        this.rEnxaqueca = 'Enxaqueca',
        this.rCefaleia = 'Cefaleia',
        this.rBaixaImunidade = 'Baixa Imunidade',
        this.rBurnout = 'Burnout',
        this.rLaringite = `<span><h4>Laringite</h4></span>
          <span class='white'>é a inflamação da laringe (região das vias aéreas onde ficam localizadas as cordas vocais), que conecta a faringe à traqueia e faz parte do sistema respiratório. A inflamação
          dessa região pode ser causada por vírus (mais prevalente), bactérias, inalação de agentes alérgicos ou esforço excessivo da voz.</span>`,
        this.rInsonia = 'Insônia',
        this.rZumbido = 'Zumbido',
        this.rLabirintite = 'Labirintite',
        this.rSinusite = 'Sinusite'
    },
    insonia() {
      this.aplicarAcu = true,
        this.aplicarAur = true,
        this.aplicarCran = true,
        this.aplicarVen = false,
        this.aplicarGua = false,
        this.aplicarForm = false,
        this.aplicar = false,
        this.aplicarTwo = false,
        this.aplicarTree = false,
        this.aplicarFour = false,
        this.aplicarFive = false,
        this.aplicarSix = false,
        this.aplicarSeven = false,
        this.aplicarEight = false,
        this.aplicarNine = false,
        this.aplicarTen = false,
        this.aplicarEleven = true,
        this.aplicarCran = true,
        this.aplicarTwelve = false,
        this.aplicarThirteen = false,
        this.aplicarFourteen = false,
        this.rAnsiedade = 'ansiedade',
        this.rDepressao = 'Depressão',
        this.rEstresse = 'Estresse',
        this.rCervicalgia = 'Cervicalgia',
        this.rLombalgia = 'Lombalgia',
        this.rEnxaqueca = 'Enxaqueca',
        this.rCefaleia = 'Cefaleia',
        this.rBaixaImunidade = 'Baixa Imunidade',
        this.rBurnout = 'Burnout',
        this.rLaringite = 'Laringite',
        this.rInsonia = `<span><h4>Insônia</h4></span>
          <span class='white'>é caracterizada pela dificuldade de dormir ou conseguir manter um sono contínuo sem ser interrompido durante a noite. Cerca de 30% a 50% dos brasileiros sofrem com a insônia,
          que pode se manifestar por diversas razões, como estresse, ansiedade, depressão, dor crônica e uso de certos medicamentos.</span>`,
        this.rZumbido = 'Zumbido',
        this.rLabirintite = 'Labirintite',
        this.rSinusite = 'Sinusite'
    },
    zumbido() {
      this.aplicarAcu = true,
        this.aplicarAur = true,
        this.aplicarCran = true,
        this.aplicarVen = false,
        this.aplicarGua = false,
        this.aplicarForm = false,
        this.aplicar = false,
        this.aplicarTwo = false,
        this.aplicarTree = false,
        this.aplicarFour = false,
        this.aplicarFive = false,
        this.aplicarSix = false,
        this.aplicarSeven = false,
        this.aplicarEight = false,
        this.aplicarNine = false,
        this.aplicarTen = false,
        this.aplicarEleven = false,
        this.aplicarTwelve = true,
        this.aplicarThirteen = false,
        this.aplicarFourteen = false,
        this.rAnsiedade = 'ansiedade',
        this.rDepressao = 'Depressão',
        this.rEstresse = 'Estresse',
        this.rCervicalgia = 'Cervicalgia',
        this.rLombalgia = 'Lombalgia',
        this.rEnxaqueca = 'Enxaqueca',
        this.rCefaleia = 'Cefaleia',
        this.rBaixaImunidade = 'Baixa Imunidade',
        this.rBurnout = 'Burnout',
        this.rLaringite = 'Laringite',
        this.rInsonia = 'Insônia',
        this.rZumbido = `<span><h4>Zumbido</h4></span>
          <span class='white'>Também chamado de Sibilo ou Tinido, pode ser definido como uma ilusão auditiva, ou seja, uma sensação sonora não relacionada com uma fonte externa de estimulação.</span>`,
        this.rLabirintite = 'Labirintite',
        this.rSinusite = 'Sinusite'
    },
    labirintite() {
      this.aplicarAcu = true,
        this.aplicarAur = true,
        this.aplicarCran = true,
        this.aplicarVen = false,
        this.aplicarGua = false,
        this.aplicarForm = false,
        this.aplicar = false,
        this.aplicarTwo = false,
        this.aplicarTree = false,
        this.aplicarFour = false,
        this.aplicarFive = false,
        this.aplicarSix = false,
        this.aplicarSeven = false,
        this.aplicarEight = false,
        this.aplicarNine = false,
        this.aplicarTen = false,
        this.aplicarEleven = false,
        this.aplicarTwelve = false,
        this.aplicarThirteen = true,
        this.aplicarFourteen = false,
        this.rAnsiedade = 'ansiedade',
        this.rDepressao = 'Depressão',
        this.rEstresse = 'Estresse',
        this.rCervicalgia = 'Cervicalgia',
        this.rLombalgia = 'Lombalgia',
        this.rEnxaqueca = 'Enxaqueca',
        this.rCefaleia = 'Cefaleia',
        this.rBaixaImunidade = 'Baixa Imunidade',
        this.rBurnout = 'Burnout',
        this.rLaringite = 'Laringite',
        this.rInsonia = 'Insônia',
        this.rZumbido = 'Zumbido',
        this.rLabirintite = `<span><h4>Labirintite</h4></span>
          <span class='white'>Labirintite é o nome popular que se dá a todos os transtornos do labirinto, uma estrutura interna do ouvido composta pela cóclea (imprescindível para a
          nossa audição), pelo vestíbulo e pelos canais semicirculares (que têm papel na manutenção do nosso equilíbrio).</span>`,
        this.rSinusite = 'Sinusite'
    },
    sinusite() {
      this.aplicarAcu = true,
        this.aplicarAur = false,
        this.aplicarCran = false,
        this.aplicarVen = false,
        this.aplicarGua = false,
        this.aplicarForm = false,
        this.aplicar = false,
        this.aplicarTwo = false,
        this.aplicarTree = false,
        this.aplicarFour = false,
        this.aplicarFive = false,
        this.aplicarSix = false,
        this.aplicarSeven = false,
        this.aplicarEight = false,
        this.aplicarNine = false,
        this.aplicarTen = false,
        this.aplicarEleven = false,
        this.aplicarTwelve = false,
        this.aplicarThirteen = false,
        this.aplicarFourteen = true,
        this.rAnsiedade = 'ansiedade',
        this.rDepressao = 'Depressão',
        this.rEstresse = 'Estresse',
        this.rCervicalgia = 'Cervicalgia',
        this.rLombalgia = 'Lombalgia',
        this.rEnxaqueca = 'Enxaqueca',
        this.rCefaleia = 'Cefaleia',
        this.rBaixaImunidade = 'Baixa Imunidade',
        this.rBurnout = 'Burnout',
        this.rLaringite = 'Laringite',
        this.rInsonia = 'Insônia',
        this.rZumbido = 'Zumbido',
        this.rLabirintite = 'Labirintite',
        this.rSinusite = `<span><h4>Sinusite</h4></span>
          <span class='white'>é a inflamação das mucosas dos seios da face, região do crânio formada por cavidades ósseas ao redor do nariz, maçãs do rosto e olhos. Os
          seios da face dão ressonância à voz, aquecem o ar inspirado e diminuem o peso do crânio, o que facilita sua sustentação.</span>`
    }
  }
}
</script>

<style scoped>
a {
  text-decoration: none;
  color: #fff;
}

i {
  color: #fff;
  font-size: .9em;
  margin: auto;
}

code {
  font-size: 0.6em;
  padding-left: 5px;
  padding-right: 5px;
  margin-left: 30px;
  margin-top: -10px;
  margin-right: 30px;
  border-left: solid 4px #e23a28;
  border-right: solid 4px #e23a28;
  color: #ddd;
}

.divider {
  height: 15px;
  background-color: #e23a2840;
}

.divider-ultimate {
  height: 30px;
  background-color: #fff;
}

.main-one {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  margin: 0px 0 0 0;
  color: #fff;
  background: #860d0d40;
  overflow-x: auto;
}


.main-one i {
  font-size: 1.2em;
  color: #fff;
}

.main-one h5 {
  margin: 25px 10px;
  opacity: 1;
}

.main-two {
  display: flex;
  justify-content: space-evenly;
  text-align: center;
  flex-direction: row;
  box-shadow: 0px 10px 15px #ffffff10;
  background: #860d0d;
  margin-top: -20px;
}

.main-two a i {
  display: block;
  font-size: 16px;
}

.main-two a {
  width: 80px;
  padding: 4px 0 1px 0;
  font-size: 14px;
  color: #ddd;
  border: solid .5px #d8d8d840;
  border-radius: 7px;
  transition: all .3s linear;
  background-color: #d8d8d840;

  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;

}

.main-two a:hover {
  color: #fff;
  border: solid .5px #e23a28;
  text-shadow: -1px 1px 10px #fff;
}

.buttonAction {
  margin: auto;
  width: 30%;
  padding: 5px;
  font-size: 14px;
  color: #fff;
  border: solid .5px #4fe70844;
  border-radius: 7px;
  transition: all .3s linear;
  background-color: #4fe70871;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: row;
}

.buttonAction:hover {
  color: #fff;
  border: solid .5px #4fe708;
  text-shadow: -1px 1px 10px #fff;
  background-color: #4fe708b6;
}

.main-tree {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  margin: 0px 0 0 0;
  color: #fff;
  background: #860d0d40;
  overflow-x: auto;
}


.main-tree i {
  font-size: 1.2em;
  color: #fff;
}

.main-tree h5 {
  margin: 25px 10px;
  opacity: 1;
}

.main-tree h3 {
  margin: 25px 10px;
  font-size: .9em;
  color: #efc289;
  opacity: 1;
  text-align: center;
}

.main-tree h4 {
  margin: 25px 10px;
  font-size: .9em;
  color: #efc289;
  opacity: 1;
  text-align: left;
}

.detail {
  text-align: center;
  /* color: #a9f596; */
  color: #fff;
  font-size: .9em;
  text-decoration: underline #fff;
}

.acupuntura {
  background: linear-gradient(#860d0d, #860d0d80, #860d0d),
    url(@/assets/img/acuSistemica.jpg);
  background-size: 100% auto;
  background-repeat: no-repeat;
}

.main-four {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  margin: 0px 0 0 0;
  color: #fff;
  background: #860d0d40;
  overflow-x: auto;
}

.main-four i {
  font-size: 1.2em;
  color: #fff;
}

.main-four h5 {
  margin: 25px 10px;
  opacity: 1;
}

.main-four h4 {
  margin: 25px 10px;
  font-size: .9em;
  color: #efc289;
  opacity: 1;
  text-align: left;
}

.auriculoterapia {
  background-image: linear-gradient(#860d0d, #860d0d80, #860d0d), url(@/assets/img/auriculo.jpg);
  background-size: 100% auto;
  background-repeat: no-repeat;
  text-align: left;
}

.main-five {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  margin: 0px 0 0 0;
  color: #fff;
  background: #860d0d40;
  overflow-x: auto;
}

.main-five i {
  font-size: 1.2em;
  color: #fff;
}

.main-five h5 {
  margin: 25px 10px;
  opacity: 1;
}

.main-five h4 {
  margin: 25px 10px;
  font-size: .9em;
  color: #efc289;
  opacity: 1;
  text-align: left;
}

.ventosaterapia {
  background-image: linear-gradient(#860d0d, #860d0d80, #860d0d), url(@/assets/img/ventosa.jpg);
  background-size: 100% auto;
  background-repeat: no-repeat;
  text-align: left;
}

.main-six {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  margin: 0px 0 0 0;
  color: #fff;
  background: #860d0d40;
  overflow-x: auto;
}

.main-six i {
  font-size: 1.2em;
  color: #fff;
}

.main-six h5 {
  margin: 25px 10px;
  opacity: 1;
}

.main-six h4 {
  margin: 25px 10px;
  font-size: .9em;
  color: #efc289;
  opacity: 1;
  text-align: right;
}

.craniopuntura {
  background-image: linear-gradient(#860d0d, #860d0d80, #860d0d), url(@/assets/img/cranio.jpg);
  background-size: 100% auto;
  background-repeat: no-repeat;
  text-align: right;
}

.main-seven {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  margin: 0px 0 0 0;
  color: #fff;
  background: #860d0d40;
  overflow-x: auto;
}

.main-seven i {
  font-size: 1.2em;
  color: #fff;
}

.main-seven h5 {
  margin: 25px 10px;
  opacity: 1;
}

.main-seven h4 {
  margin: 25px 10px;
  font-size: .9em;
  color: #efc289;
  opacity: 1;
  text-align: left;
}

.formulas {
  background-image: linear-gradient(#860d0d, #860d0d80, #860d0d), url(@/assets/img/formula.jpg);
  background-size: 100% auto;
  background-repeat: no-repeat;
  text-align: left;
}

.hCincoOne {
  margin: 10px 0px 22px 10px;
}

.hCincoTwo {
  margin: -10px 0px 22px 10px;

}

#main-white {
  position: static;
  color: #fff;
  background-color: #d8d8d840;
  width: 100%;
  margin: 30px auto 0px;
  text-align: left;
}

#main-white div {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  color: #fff;
  overflow-x: auto;
}

#main-white h4 {
  margin: 0 10px;
}

#main-white .clientesGraph {
  margin: 10px;
  background-color: #e23a28;
}


a.nuxt-link-exact-active {
  background-color: #e23a2890;
  color: #fff;
  border-radius: 0% 10% 10% 10%;
}

.main-l-trat {
  width: 95%;
  text-align: left;
  margin: -10px auto 20px auto;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  align-self: center;
}

.dot-index {
  cursor: pointer;
  transition: all .3s ease-in;
  background-color: #d8d8d840;
  margin: 10px 16px;
  padding: 10px;
  font-size: 1em;
  text-transform: uppercase;
  font-weight: bold;
  border-radius: 7px;
  border: solid .5px #d8d8d840;
}

.dot-index:Hover {
  color: #fff;
  border: solid .5px #e23a28;
}

.dot-index {
  margin: 5px 2px;
  padding: 4px;
  font-size: .6em;
}

.dotHover {
  background-color: #d8d8d840;
  color: #ddd;
  border: solid .5px #e23a28;
}

.dot:hover {
  background-color: #d8d8d840;
}

.dot:active {
  color: dbd1d1;
  background-color: #d8d8d8;
}

.selectTitle {
  text-shadow: -2px 2px 5px #e23a28,
    -2px -2px 5px #e23a28,
    2px 2px 5px #e23a28,
    2px -2px 5px #e23a28;
  color: #fff;
  border-radius: 7px;
}

.selectTitleHover {
  color: #fff;
  border: solid .5px #e23a28;
  border-radius: 7px;
}

.selectTitleHover span {
  font-size: 1.2em;
}

.white {
  color: #ffffff;
  margin: 0;
}

.homeTwo {
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-evenly;
  align-self: center;
  font-size: .9em;
  width: 95%;
  margin: auto;
  font-weight: bold;
  color: #dbd1d1;
}

.homeTwo div {
  padding-top: 5px;
  padding-left: 10px;
  padding-right: 10px;

}

.homeTwo a {
  font-size: 1em;
  margin: auto;
  font-weight: bold;
  color: #dbd1d1;
}

.homeTwoDot:hover {
  text-shadow: -1px 1px 10px #fff;
  cursor: pointer;
}

.hr {
  width: 95%;
  border: solid .3px #e23a2840;
  margin: 30px auto 30px auto;
}



@media only screen and (max-width: 369px) {}
</style>
