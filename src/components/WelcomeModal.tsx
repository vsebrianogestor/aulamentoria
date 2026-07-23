import { useEffect, useRef, useState, type FormEvent } from "react";
import { X } from "lucide-react";
import { Logo } from "./Logo";

interface WelcomeModalProps {
  /** "welcome" no primeiro acesso; "edit" ao atualizar o nome já salvo. */
  mode: "welcome" | "edit";
  initialName?: string;
  onSubmit: (name: string) => void;
  /** Disponível apenas no modo "edit" (o primeiro acesso é obrigatório). */
  onClose?: () => void;
}

/**
 * Janela central de identificação do participante.
 * Sem login, senha ou cadastro — apenas o nome, salvo localmente.
 */
export function WelcomeModal({
  mode,
  initialName = "",
  onSubmit,
  onClose,
}: WelcomeModalProps) {
  const [value, setValue] = useState(initialName);
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const isEdit = mode === "edit";

  // Foca o campo ao abrir e permite fechar com Esc (somente no modo edição).
  useEffect(() => {
    inputRef.current?.focus();
    if (!isEdit || !onClose) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isEdit, onClose]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const trimmed = value.trim();
    // Regras: obrigatório, não aceitar só espaços, mínimo de 2 caracteres.
    if (trimmed.length < 2) {
      setError("Informe seu nome para continuar.");
      inputRef.current?.focus();
      return;
    }
    onSubmit(trimmed);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-ink/50 px-6 backdrop-blur-sm animate-fade-in"
      onMouseDown={isEdit && onClose ? onClose : undefined}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="welcome-title"
        className="relative w-full max-w-md rounded-xl2 border border-line bg-card p-9 shadow-modal animate-modal-in"
        onMouseDown={(e) => e.stopPropagation()}
      >
        {isEdit && onClose && (
          <button
            type="button"
            onClick={onClose}
            aria-label="Fechar"
            className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full text-muted transition-colors duration-200 hover:bg-paper hover:text-ink"
          >
            <X className="h-5 w-5" strokeWidth={1.8} />
          </button>
        )}

        <Logo className="mb-6 h-12 w-12 text-ink" />

        <h2
          id="welcome-title"
          className="font-display text-3xl text-ink tracking-display"
        >
          {isEdit ? "Editar seu nome" : "Bem-vindo à mentoria"}
        </h2>
        <p className="mt-3 text-[15px] leading-relaxed text-muted">
          {isEdit
            ? "Atualize como você gostaria de ser chamado durante a mentoria."
            : "Antes de acessar os encontros, informe como você gostaria de ser chamado."}
        </p>

        <form onSubmit={handleSubmit} className="mt-7" noValidate>
          <label
            htmlFor="participant-name"
            className="mb-2 block text-sm font-medium text-ink"
          >
            Seu nome
          </label>
          <input
            id="participant-name"
            ref={inputRef}
            type="text"
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
              if (error) setError(null);
            }}
            aria-invalid={error ? true : undefined}
            aria-describedby={error ? "name-error" : undefined}
            autoComplete="off"
            className="w-full rounded-lg border border-line bg-paper px-4 py-3 text-ink outline-none transition-colors duration-200 placeholder:text-subtle focus:border-ink focus:bg-card"
            placeholder="Ex.: Ana Ribeiro"
          />
          {error && (
            <p id="name-error" role="alert" className="mt-2 text-sm text-ink">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="mt-6 w-full rounded-lg bg-ink px-5 py-3 font-medium text-white transition-all duration-200 hover:bg-charcoal focus-visible:outline-offset-4 active:scale-[0.99]"
          >
            {isEdit ? "Salvar" : "Entrar na mentoria"}
          </button>
        </form>
      </div>
    </div>
  );
}
