/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.html"],
  theme: {
    extend: {
      Keyframes:{
        fullSpin:{
            '100%':{
                transform: 'rotate(-360deg)'
            }
        }
        },
        animation:{
            fullSpin:'fullSpin 3s linear infinite'
        }
    },
  },
  plugins: [],
}

