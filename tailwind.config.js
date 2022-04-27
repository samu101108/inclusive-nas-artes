module.exports = {
    mode: 'jit',
    content: ['./templates/**/*.{twig,html,js}'],
    purge: ['./templates/**/*.{twig,html,js}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {
        colors: {
          bege: '#E6DFC8',
          amarelo:{
            400: '#F0CF36',
            600: '#F2C700',
          },
          azul:{
            400: '#20B8BD',
            600: '#10979B',
          },
          vermelho: {
            400: '#EB5E4F',
            600: '#EF1B1B',
          },
          laranja: {
            400: '#B83D16',
            600: '#C32F00',
          },
          marrom: '#6C2A0D',
          cinza: '#323232',
        },
        backgroundImage: {        
          'bg-home-top': "url('../static/imagens/Fundo-home-top.jpg')",   
        //   'ferramentas': "url('../../img/ferramentas-exclusivas.jpg')",        
        //   'slide-top-mobible': "url('../../img/slide-top-mobi.jpg')",        
        //   'slide-top': "url('../../img/slide-top.jpg')",        
        },
        gridTemplateRows: {        
          '2': 'repeat(2, minmax(0, auto))',
        }
      },
      fontFamily: {
        'sans': ['Montserrat', 'sans-serif'],
        'body': ['Montserrat', 'sans-serif'],
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }
  