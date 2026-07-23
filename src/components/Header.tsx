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
      <div className="mx-auto flex max-w-[1360px] flex-col gap-4 px-4 py-5 sm:flex-row sm:items-center sm:justify-between sm:gap-8 sm:px-6 sm:py-6 lg:px-10">
        {/* Lado esquerdo */}
        <div className="flex items-center gap-3 sm:gap-5">
          <Logo className="h-11 w-11 shrink-0 text-white sm:h-14 sm:w-14" />
          <div className="border-l border-white/15 pl-3 sm:pl-5">
            <h1 className="font-display text-lg leading-tight tracking-display sm:text-2xl">
              {mentorshipName}
            </h1>
            <p className="mt-1 text-xs text-white/70 sm:text-sm">
              Empresa:{" "}
              <span className="font-medium text-white/90">{companyName}</span>
            </p>
            <p className="mt-0.5 text-[10px] uppercase tracking-label text-white/45 sm:text-xs">
              Com {mentorName}
            </p>
          </div>
        </div>

        {/* Lado direito */}
        {participantName && (
          <div className="flex items-center gap-2 border-t border-white/10 pt-4 sm:border-0 sm:pt-0">
            <span className="text-sm text-white/90 sm:text-base">
              Olá,{" "}
              <span className="font-display text-base tracking-display sm:text-lg">
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
