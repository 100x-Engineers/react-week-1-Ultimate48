/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      'Inter':['Inter','sans-serif'],
      'Chirp':['Chirp','sans-serif'],
    },
    extend: {
      boxShadow:{
        'standard':'0px 8px 16px 0px rgba(0, 0, 0, 0.25)',
      },
      colors:{
        "neutral-50":"#f9f9f9",
        "neutral-100":"#f4f4f4",
        "neutral-200":"#e4e4e4",
        "neutral-300":"#d3d3d3",
        "neutral-400":"#a2a2a2",
        "neutral-500":"#737373",
        "neutral-600":"#525252",
        "neutral-700":"#404040",
        "neutral-800":"#262626",
        "neutral-900":"#171717",
        "neutral-950":"#0a0a0a",
        "neutral-1000":"#000000",
        "twitterblue-default":"#1d9bf0",
        "twitterblue-hover":"#1871ca",
        "twitterblue-diabled":"#1e5d87",
        "bluewash":"#75beef",
        "buttonstroke":"#546a7a",
        "searchbarfill":"#212327",
        "cardfill":"#16181c",
        "success":"#00be74",
        "error":"#8b141a",
        "head":"#0c375f",
        "dfb":'rgba(255, 255, 255, 0.60)',
        "change":'rgba(0, 0, 0, 0.6)'
      }
    },
  },
  plugins: [],
}