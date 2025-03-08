import type { Config } from 'tailwindcss'

const config: Config = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        "amarelo_Mostarda": "#F2BC57",
        "laranja_Médio": "#F28B30",
        "laranja_Forte": "#EC7F24",
        "marrom_Avermelhado": "#A6511F",
        "vermelho_Escuro": "#BF1E0F",
        "grafite": "#272526",
        "azul_principal": "#3B82F6"
      }
    },
  },
  plugins: [],
}
export default config