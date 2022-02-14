module.exports = {
    mode: 'jit',
    content: ['./templates/**/*.{twig,html,js}'],
    purge: ['./templates/**/*.{twig,html,js}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {
        colors: {
          verde: {
            100: '#65c730',
            200: '#5EB132',
            400: '#14683C',
          },
          cinza: {
            100: '#FCFCFC',
            200: '#F5F5F5',
          },
        },
        backgroundImage: {        
        //   'ferramentas-mobile': "url('../../img/ferramentas-exclusivas-mobile.jpg')",      
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
  