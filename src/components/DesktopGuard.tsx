import { useEffect, useState, type ReactNode } from "react";
import { Monitor } from "lucide-react";
import { Logo } from "./Logo";

const MIN_WIDTH = 1024;

interface DesktopGuardProps {
  children: ReactNode;
}

/**
 * A plataforma é voltada exclusivamente para computador.
 * Abaixo de 1024px exibe uma tela simples pedindo acesso pelo computador,
 * em vez de tentar adaptar toda a interface para celular.
 */
export function DesktopGuard({ children }: DesktopGuardProps) {
  const [isDesktop, setIsDesktop] = useState(
    () => typeof window === "undefined" || window.innerWidth >= MIN_WIDTH,
  );

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= MIN_WIDTH);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (isDesktop) return <>{children}</>;

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-paper px-8 text-center">
      <Logo className="mb-8 h-16 w-16 text-ink" />
      <span
        className="mb-6 flex h-14 w-14 items-center justify-center rounded-full border border-line bg-card text-ink"
        aria-hidden="true"
      >
        <Monitor className="h-6 w-6" strokeWidth={1.6} />
      </span>
      <h1 className="font-display text-3xl text-ink tracking-display">
        Portal disponível no computador
      </h1>
      <p className="mt-4 max-w-sm text-base leading-relaxed text-muted">
        Para uma melhor experiência, acesse esta mentoria por um computador ou
        notebook.
      </p>
    </div>
  );
}
