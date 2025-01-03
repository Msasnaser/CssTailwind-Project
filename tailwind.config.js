/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}", 
  ],
  theme: {
    fontFamily: {
      Inter:['Inter','sans-serif']
    }, 
       
    extend: {
      screens:{
        '2md':'944px',
        's':'425px',
        's':'326px'
      },
      colors:{
       primary: '#7E3AF2',
       secondaryText: '#6B7280',
       mainText: '#111928',
       BorderColor:'#E5E7EB'
    },
  },
  },
  plugins: [],
}

