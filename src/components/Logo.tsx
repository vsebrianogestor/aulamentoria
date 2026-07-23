interface LogoProps {
  className?: string;
}

/**
 * Marca "Bela Gazela" — cabeça de gazela em line art.
 * Desenhada em SVG (usa `currentColor`), para herdar a cor do contexto
 * (branca sobre o cabeçalho escuro, escura sobre fundo claro).
 */
export function Logo({ className }: LogoProps) {
  return (
    <svg
      viewBox="0 0 100 104"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={2.1}
      strokeLinecap="round"
      strokeLinejoin="round"
      role="img"
      aria-label="Bela Gazela"
    >
      {/* Chifres */}
      <path d="M46 44 C 42.5 29, 39.5 17, 34 8" />
      <path d="M54 44 C 57.5 29, 60.5 17, 66 8" />
      {/* Testa (une a base dos chifres) */}
      <path d="M46 44 C 48 41.5, 52 41.5, 54 44" />
      {/* Orelhas */}
      <path d="M43 50 C 31 47.5, 21 51.5, 15 59 C 23.5 60.5, 35 58.5, 43.5 53 Z" />
      <path d="M57 50 C 69 47.5, 79 51.5, 85 59 C 76.5 60.5, 65 58.5, 56.5 53 Z" />
      {/* Rosto/focinho afunilando em V */}
      <path d="M44 52 C 42.5 69, 46 87, 50 95" />
      <path d="M56 52 C 57.5 69, 54 87, 50 95" />
    </svg>
  );
}
