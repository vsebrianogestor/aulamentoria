/**
 * Monta a URL de incorporação (embed) de um formulário Tally.
 *
 * Aceita tanto o link de compartilhamento (`https://tally.so/r/XXXXXX`) quanto
 * uma URL de embed já pronta. Converte `/r/` em `/embed/`, aplica parâmetros
 * visuais discretos e injeta o nome do participante para pré-preenchimento.
 *
 * Pré-preenchimento: no Tally, crie um campo (ex.: "Nome") e, nas opções do
 * campo, defina o parâmetro de URL como `nome`. Assim o valor chega preenchido.
 */
export function buildTallyEmbedUrl(rawUrl: string, participantName?: string) {
  try {
    const url = new URL(rawUrl.trim());

    if (url.hostname.includes("tally.so") && url.pathname.startsWith("/r/")) {
      url.pathname = url.pathname.replace("/r/", "/embed/");
    }

    // Parâmetros de embed (só define se ainda não estiverem presentes).
    const defaults: Record<string, string> = {
      alignLeft: "1",
      hideTitle: "1",
      transparentBackground: "1",
    };
    for (const [key, value] of Object.entries(defaults)) {
      if (!url.searchParams.has(key)) url.searchParams.set(key, value);
    }

    // Pré-preenche o nome do participante (campo com parâmetro "nome").
    const name = participantName?.trim();
    if (name) url.searchParams.set("nome", name);

    return url.toString();
  } catch {
    // Se a URL for inválida, devolve o valor original (o iframe apenas não carrega).
    return rawUrl;
  }
}
