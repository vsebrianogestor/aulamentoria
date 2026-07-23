import { Lock } from "lucide-react";
import type { Meeting } from "../types/meeting";

interface MeetingCardProps {
  meeting: Meeting;
  onOpen: (meeting: Meeting) => void;
}

/**
 * Card de um encontro no cronograma.
 * Disponível: card branco, clicável, com leve elevação no hover.
 * Bloqueado: fundo cinza, opacidade reduzida, cadeado e cursor "not-allowed".
 * A distinção nunca depende apenas de cor (há sempre ícone + texto de status).
 */
export function MeetingCard({ meeting, onOpen }: MeetingCardProps) {
  const { number, title, date, released } = meeting;

  if (!released) {
    // ---------------------- ESTADO BLOQUEADO ----------------------
    return (
      <div
        aria-disabled="true"
        aria-label={`Encontro ${number}: ${title}. Disponível após o encontro.`}
        className="flex cursor-not-allowed select-none flex-col rounded-xl2 border border-line bg-stone p-6 opacity-70"
      >
        <span className="font-display text-sm uppercase tracking-label text-muted">
          Encontro {number}
        </span>
        <h3 className="mt-2 min-h-[3.5rem] text-lg font-semibold leading-snug text-muted">
          {title}
        </h3>
        <div className="mt-auto pt-4">
          <p className="text-sm text-muted">Data: {date}</p>
          <p className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-muted">
            <Lock className="h-4 w-4" strokeWidth={1.8} aria-hidden="true" />
            Disponível após o encontro
          </p>
        </div>
      </div>
    );
  }

  // ---------------------- ESTADO DISPONÍVEL ----------------------
  return (
    <button
      type="button"
      onClick={() => onOpen(meeting)}
      aria-label={`Encontro ${number}: ${title}. Disponível. Abrir detalhes.`}
      className="group flex cursor-pointer flex-col rounded-xl2 border border-line bg-card p-6 text-left shadow-card transition-all duration-200 hover:-translate-y-1 hover:border-ink/25 hover:shadow-card-hover"
    >
      <span className="font-display text-sm uppercase tracking-label text-ink">
        Encontro {number}
      </span>
      <h3 className="mt-2 min-h-[3.5rem] text-lg font-semibold leading-snug text-ink">
        {title}
      </h3>
      <div className="mt-auto pt-4">
        <p className="text-sm text-muted">Data: {date}</p>
        <p className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-ink">
          <span
            className="h-2.5 w-2.5 rounded-full bg-ink"
            aria-hidden="true"
          />
          Disponível
        </p>
      </div>
    </button>
  );
}
