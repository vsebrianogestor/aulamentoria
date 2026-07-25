import { useEffect, useRef } from "react";
import { X } from "lucide-react";
import type { Meeting } from "../types/meeting";
import { buildTallyEmbedUrl } from "../lib/tally";

interface TaskModalProps {
  meeting: Meeting;
  participantName: string;
  onClose: () => void;
}

/**
 * Pop-up que exibe o formulário da tarefa (Tally) incorporado dentro do portal,
 * com o nome do participante já pré-preenchido. As respostas vão direto para o
 * painel do Tally do mentor — o portal continua sem backend.
 * Fecha ao clicar fora, no botão de fechar ou ao pressionar Esc.
 */
export function TaskModal({ meeting, participantName, onClose }: TaskModalProps) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const embedUrl = buildTallyEmbedUrl(meeting.taskFormUrl, participantName);

  useEffect(() => {
    closeRef.current?.focus();
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/60 px-4 py-6 backdrop-blur-sm animate-fade-in sm:px-6 sm:py-10"
      onMouseDown={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="task-title"
        className="relative flex h-[85vh] w-full max-w-2xl flex-col overflow-hidden rounded-xl2 border border-line bg-card shadow-modal animate-modal-in"
        onMouseDown={(e) => e.stopPropagation()}
      >
        {/* Cabeçalho do pop-up */}
        <div className="flex items-center justify-between gap-4 border-b border-line px-6 py-4">
          <div>
            <span className="font-display text-xs uppercase tracking-label text-muted">
              Tarefa · Encontro {meeting.number}
            </span>
            <h2
              id="task-title"
              className="font-display text-xl leading-tight text-ink tracking-display"
            >
              {meeting.title}
            </h2>
          </div>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Fechar tarefa"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-muted transition-colors duration-200 hover:bg-paper hover:text-ink"
          >
            <X className="h-5 w-5" strokeWidth={1.8} />
          </button>
        </div>

        {/* Formulário Tally incorporado */}
        <iframe
          src={embedUrl}
          title={`Formulário da tarefa do Encontro ${meeting.number}`}
          className="w-full flex-1 border-0 bg-card"
          loading="lazy"
        />
      </div>
    </div>
  );
}
