import { Award, Download, Sparkles } from "lucide-react";
import type { Certificate } from "../data/certificates";

interface CertificateBannerProps {
  certificate: Certificate;
  participantName: string;
}

/**
 * Bloco de destaque exibido quando o certificado do participante logado
 * está disponível. Visual celebratório (brilho dourado animado), mas sóbrio
 * o bastante para conviver com a identidade monocromática do portal.
 */
export function CertificateBanner({
  certificate,
  participantName,
}: CertificateBannerProps) {
  return (
    <section
      aria-label="Certificado de conclusão disponível"
      className="relative mb-8 overflow-hidden rounded-xl2 border border-ink bg-ink p-6 shadow-modal animate-modal-in sm:mb-10 sm:p-8"
    >
      {/* Brilho dourado em movimento, decorativo. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 animate-shine bg-[linear-gradient(110deg,transparent_30%,rgba(212,175,55,0.22)_45%,rgba(212,175,55,0.35)_50%,rgba(212,175,55,0.22)_55%,transparent_70%)] bg-[length:200%_100%]"
      />

      <div className="relative flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-start gap-4">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gold/50 bg-gold/10 text-gold animate-pop-in sm:h-14 sm:w-14">
            <Award className="h-6 w-6 sm:h-7 sm:w-7" strokeWidth={1.6} />
          </span>
          <div>
            <p className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-label text-gold">
              <Sparkles className="h-3.5 w-3.5" strokeWidth={2} />
              Mentoria concluída
            </p>
            <h2 className="mt-1.5 font-display text-xl leading-tight text-white tracking-display sm:text-2xl">
              Parabéns, {participantName.split(" ")[0]}!
            </h2>
            <p className="mt-1.5 max-w-md text-sm leading-relaxed text-white/70">
              Você concluiu a Mentoria de Implantação de Tráfego Pago Interno.
              Seu certificado já está pronto — baixe e guarde essa conquista.
            </p>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-white/70">
              Parabéns pelo tempo dedicado e agradecemos a confiança, você
              merece!
            </p>
          </div>
        </div>

        <a
          href={certificate.fileUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Baixar certificado de conclusão (abre em nova aba)"
          className="group flex shrink-0 items-center gap-2.5 self-stretch rounded-lg border border-gold bg-gold px-5 py-3 text-sm font-semibold text-ink transition-all duration-200 hover:bg-gold-light active:scale-[0.99] sm:self-auto"
        >
          <Download className="h-[18px] w-[18px]" strokeWidth={2} />
          Baixar meu certificado
        </a>
      </div>
    </section>
  );
}
