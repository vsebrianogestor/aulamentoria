import { Pencil } from "lucide-react";
import { Logo } from "./Logo";
import { mentorshipConfig } from "../config/mentorship";

interface HeaderProps {
  participantName: string;
  onEditName: () => void;
}

/**
 * Cabeçalho da mentoria.
 * Esquerda: identidade + nome da mentoria, empresa atendida e mentor.
 * Direita: saudação ao participante com ação de editar o nome.
 * Sem menu, foto de perfil, progresso, notificações, configurações ou logout.
 */
export function Header({ participantName, onEditName }: HeaderProps) {
  const { mentorshipName, companyName, mentorName } = mentorshipConfig;

  return (
    <header className="bg-ink text-white">
      <div className="mx-auto flex max-w-[1360px] items-center justify-between gap-8 px-10 py-6">
        {/* Lado esquerdo */}
        <div className="flex items-center gap-5">
          <Logo className="h-14 w-14 shrink-0 text-white" />
          <div className="border-l border-white/15 pl-5">
            <h1 className="font-display text-2xl leading-tight tracking-display">
              {mentorshipName}
            </h1>
            <p className="mt-1 text-sm text-white/70">
              Empresa:{" "}
              <span className="font-medium text-white/90">{companyName}</span>
            </p>
            <p className="mt-0.5 text-xs uppercase tracking-label text-white/45">
              Com {mentorName}
            </p>
          </div>
        </div>

        {/* Lado direito */}
        {participantName && (
          <div className="flex items-center gap-2">
            <span className="text-base text-white/90">
              Olá,{" "}
              <span className="font-display text-lg tracking-display">
                {participantName}
              </span>
            </span>
            <button
              type="button"
              onClick={onEditName}
              aria-label="Editar seu nome"
              title="Editar seu nome"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 text-white/70 transition-colors duration-200 hover:border-white/50 hover:text-white"
            >
              <Pencil className="h-3.5 w-3.5" strokeWidth={2} />
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
