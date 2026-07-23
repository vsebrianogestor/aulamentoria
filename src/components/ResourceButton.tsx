import type { LucideIcon } from "lucide-react";

interface ResourceButtonProps {
  label: string;
  url: string;
  icon: LucideIcon;
}

/**
 * Botão de recurso do encontro (gravação, material ou tarefa).
 * - Com link: abre em nova aba com segurança (noopener noreferrer).
 * - Sem link: aparece desativado com "Ainda não disponível", sem abrir aba
 *   vazia nem gerar erro.
 */
export function ResourceButton({ label, url, icon: Icon }: ResourceButtonProps) {
  const available = url.trim().length > 0;

  if (!available) {
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

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${label} (abre em nova aba)`}
      className="group flex items-center gap-3 rounded-lg border border-ink bg-ink px-4 py-3 text-white transition-all duration-200 hover:bg-charcoal active:scale-[0.99]"
    >
      <Icon className="h-5 w-5 shrink-0" strokeWidth={1.7} aria-hidden="true" />
      <span className="text-sm font-medium">{label}</span>
    </a>
  );
}
