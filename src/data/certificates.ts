import { normalizeName } from "../lib/normalizeName";

/**
 * CERTIFICADOS DE CONCLUSÃO
 * ---------------------------------------------------------------------------
 * Cada item reconhece o participante pelo nome digitado no portal (campo de
 * identificação salvo no LocalStorage) e libera um bloco especial com o link
 * do certificado.
 *
 *  • `aliases` .... variações aceitas do nome (sem acento, minúsculas é
 *                   resolvido automaticamente por `normalizeName`). Inclua
 *                   o nome completo e o primeiro nome, para cobrir quem
 *                   digitou só o primeiro nome no portal.
 *  • `fileUrl` .... caminho do PDF do certificado em /public/materiais.
 *
 * Para adicionar um novo certificado, basta acrescentar um item à lista.
 */
export interface Certificate {
  displayName: string;
  aliases: string[];
  fileUrl: string;
}

export const certificates: Certificate[] = [
  {
    displayName: "Priscila Puglese",
    aliases: ["priscila puglese", "priscilla puglese", "priscila", "priscilla"],
    fileUrl: "/materiais/certificados/certificado-priscila-puglese.pdf",
  },
  {
    displayName: "Renato Alexandre",
    aliases: [
      "renato alexandre da silva leite",
      "renato alexandre",
      "renato leite",
      "renato",
    ],
    fileUrl: "/materiais/certificados/certificado-renato-alexandre.pdf",
  },
  {
    displayName: "Alex",
    // "vinicius" e "bianca" incluídos de propósito: permitem conferir o
    // bloco de certificado digitando esses nomes, usando o PDF do Alex
    // como exemplo (apenas para teste visual).
    aliases: [
      "alex",
      "alex almeida",
      "alexandre almeida",
      "vinicius",
      "vinicius sebriano",
      "bianca",
      "bianca landin lazaro",
    ],
    fileUrl: "/materiais/certificados/certificado-alex.pdf",
  },
];

/** Encontra o certificado do participante a partir do nome salvo no portal. */
export function findCertificateForName(
  participantName: string,
): Certificate | undefined {
  const normalized = normalizeName(participantName);
  if (!normalized) return undefined;
  return certificates.find((cert) =>
    cert.aliases.some((alias) => normalizeName(alias) === normalized),
  );
}
