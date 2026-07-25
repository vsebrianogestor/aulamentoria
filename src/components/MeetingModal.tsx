import { useEffect, useRef } from "react";
import { X, PlayCircle, ScrollText, BookOpen, PenLine } from "lucide-react";
import type { Meeting } from "../types/meeting";
import { ResourceButton } from "./ResourceButton";

interface MeetingModalProps {
  meeting: Meeting;
  onClose: () => void;
  /** Abre o pop-up do formulário da tarefa (Tally). */
  onOpenTask: (meeting: Meeting) => void;
}

/**
 * Janela modal com os detalhes de um encontro liberado.
 * Fecha ao clicar fora, no botão de fechar ou ao pressionar Esc.
 */
export function MeetingModal({ meeting, onClose, onOpenTask }: MeetingModalProps) {
  const hasTaskForm = meeting.taskFormUrl.trim().length > 0;
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

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
      className="fixed inset-0 z-50 flex items-center justify-center bg-ink/50 px-4 py-6 backdrop-blur-sm animate-fade-in sm:px-6 sm:py-10"
      onMouseDown={onClose}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="meeting-title"
        className="relative max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-xl2 border border-line bg-card p-6 shadow-modal animate-modal-in sm:p-9"
        onMouseDown={(e) => e.stopPropagation()}
      >
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Fechar detalhes do encontro"
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full text-muted transition-colors duration-200 hover:bg-paper hover:text-ink"
        >
          <X className="h-5 w-5" strokeWidth={1.8} />
        </button>

        <span className="font-display text-sm uppercase tracking-label text-muted">
          Encontro {meeting.number}
        </span>
        <h2
          id="meeting-title"
          className="mt-1 pr-8 font-display text-2xl leading-tight text-ink tracking-display sm:text-3xl"
        >
          {meeting.title}
        </h2>
        <p className="mt-2 text-sm text-muted">Data: {meeting.date}</p>

        <p className="mt-5 text-[15px] leading-relaxed text-ink/80">
          {meeting.description}
        </p>

        <div className="mt-7 flex flex-col gap-3">
          <ResourceButton
            label="Assistir à gravação"
            url={meeting.recordingUrl}
            icon={PlayCircle}
          />
          <ResourceButton
            label="Ler a transcrição"
            url={meeting.transcriptUrl}
            icon={ScrollText}
          />
          <ResourceButton
            label="Acessar o material do encontro"
            url={meeting.extraMaterialUrl}
            icon={BookOpen}
          />
          <ResourceButton
            label="Acessar e realizar a tarefa"
            icon={PenLine}
            onClick={hasTaskForm ? () => onOpenTask(meeting) : undefined}
          />
        </div>
      </div>
    </div>
  );
}
