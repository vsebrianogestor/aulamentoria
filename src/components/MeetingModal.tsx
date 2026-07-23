import { useEffect, useRef } from "react";
import { X, PlayCircle, FileText, ClipboardCheck } from "lucide-react";
import type { Meeting } from "../types/meeting";
import { ResourceButton } from "./ResourceButton";

interface MeetingModalProps {
  meeting: Meeting;
  onClose: () => void;
}

/**
 * Janela modal com os detalhes de um encontro liberado.
 * Fecha ao clicar fora, no botão de fechar ou ao pressionar Esc.
 */
export function MeetingModal({ meeting, onClose }: MeetingModalProps) {
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
      className="fixed inset-0 z-50 flex items-center justify-center bg-ink/50 px-6 py-10 backdrop-blur-sm animate-fade-in"
      onMouseDown={onClose}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="meeting-title"
        className="relative w-full max-w-lg rounded-xl2 border border-line bg-card p-9 shadow-modal animate-modal-in"
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
          className="mt-1 pr-8 font-display text-3xl leading-tight text-ink tracking-display"
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
            label="Acessar material complementar"
            url={meeting.extraMaterialUrl}
            icon={FileText}
          />
          <ResourceButton
            label="Acessar tarefa"
            url={meeting.assignmentUrl}
            icon={ClipboardCheck}
          />
        </div>
      </div>
    </div>
  );
}
