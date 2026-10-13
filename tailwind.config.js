/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      // Identidade visual "Bela Gazela": paleta monocromática, elegante e sóbria.
      colors: {
        ink: "#0A0A0A", // preto principal (textos e cabeçalho)
        charcoal: "#1A1A1A", // preto suavizado
        paper: "#F7F6F3", // fundo geral, off-white quente
        stone: "#EFEDE7", // fundo dos cards bloqueados
        card: "#FFFFFF", // cards disponíveis
        line: "#E4E1D9", // bordas discretas
        muted: "#8A857B", // texto secundário
        subtle: "#B7B2A8", // texto/ícones ainda mais suaves
        success: "#16A34A", // verde do ponto de status "Disponível"
        "success-text": "#15803D", // verde do texto (contraste AA em fundo claro)
        gold: "#D4AF37", // dourado do bloco de certificado (conquista)
        "gold-light": "#E3C565", // hover do botão de certificado
      },
      fontFamily: {
        // VIBERATE (fonte solicitada) para marca e títulos de destaque.
        display: ['"Viberate"', "Georgia", "serif"],
        // Sans neutra do sistema para leitura confortável do corpo/UI.
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
      },
      boxShadow: {
        card: "0 1px 2px rgba(10, 10, 10, 0.04), 0 8px 24px rgba(10, 10, 10, 0.05)",
        "card-hover":
          "0 2px 4px rgba(10, 10, 10, 0.06), 0 16px 40px rgba(10, 10, 10, 0.10)",
        modal: "0 24px 70px rgba(10, 10, 10, 0.28)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
      keyframes: {
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "modal-in": {
          from: { opacity: "0", transform: "translateY(8px) scale(0.98)" },
          to: { opacity: "1", transform: "translateY(0) scale(1)" },
        },
        "page-in": {
          from: { opacity: "0", transform: "translateY(10px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        shine: {
          from: { backgroundPosition: "200% 0" },
          to: { backgroundPosition: "-200% 0" },
        },
        "pop-in": {
          "0%": { opacity: "0", transform: "scale(0.6)" },
          "60%": { opacity: "1", transform: "scale(1.08)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
      animation: {
        "fade-in": "fade-in 200ms ease-out",
        "modal-in": "modal-in 200ms ease-out",
        "page-in": "page-in 400ms ease-out",
        shine: "shine 3.5s ease-in-out infinite",
        "pop-in": "pop-in 500ms cubic-bezier(0.34, 1.56, 0.64, 1) 150ms both",
      },
    },
  },
  plugins: [],
};
