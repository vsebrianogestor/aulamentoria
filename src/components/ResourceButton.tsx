import type { LucideIcon } from "lucide-react";

interface ResourceButtonProps {
  label: string;
  icon: LucideIcon;
  /** Modo link: abre em nova aba. Ignorado se `onClick` for informado. */
  url?: string;
  /** Modo ação: executa algo no próprio portal (ex.: abrir o pop-up da tarefa). */
  onClick?: () => void;
  /** Variante visual: primária (preta) ou secundária (contornada). */
  variant?: "primary" | "secondary";
}

/**
 * Botão de recurso do encontro (gravação, material, tarefa e formulário).
 * - Modo link (`url`): abre em nova aba com segurança (noopener noreferrer).
 * - Modo ação (`onClick`): dispara uma ação dentro do portal.
 * - Sem link nem ação: aparece desativado com "Ainda não disponível",
 *   sem abrir aba vazia nem gerar erro.
 */
export function ResourceButton({
  label,
  icon: Icon,
  url,
  onClick,
  variant = "primary",
}: ResourceButtonProps) {
  const isAction = typeof onClick === "function";
  const isLink = !isAction && typeof url === "string" && url.trim().length > 0;

  // Estado desativado (encontro liberado, mas recurso ainda sem link/ação).
  if (!isAction && !isLink) {
    return (
      <div
        aria-disabled="true"
        className="flex cursor-not-allowed items-center gap-3 rounded-lg border border-line bg-stone px-4 py-3 text-muted"
      >
        <Icon className="h-5 w-5 shrink-0" strokeWidth={1.7} aria-hidden="true" />
        <span className="flex flex-col leading-tight">
          <span className="text-sm font-medium">{label}</span>
          <span className="text-xs text-subtle">Ainda não disponível</span>
        </span>
      </div>
    );
  }

  const styles =
    variant === "secondary"
      ? "border-ink/25 bg-card text-ink hover:border-ink hover:bg-paper"
      : "border-ink bg-ink text-white hover:bg-charcoal";
  const className = `group flex items-center gap-3 rounded-lg border px-4 py-3 transition-all duration-200 active:scale-[0.99] ${styles}`;

  if (isAction) {
    return (
      <button type="button" onClick={onClick} className={className}>
        <Icon className="h-5 w-5 shrink-0" strokeWidth={1.7} aria-hidden="true" />
        <span className="text-sm font-medium">{label}</span>
      </button>
    );
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${label} (abre em nova aba)`}
      className={className}
    >
      <Icon className="h-5 w-5 shrink-0" strokeWidth={1.7} aria-hidden="true" />
      <span className="text-sm font-medium">{label}</span>
    </a>
  );
}
