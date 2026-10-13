/**
 * Normaliza um nome para comparação: remove acentos, pontuação e espaços
 * extras, e passa tudo para minúsculas. Usado para reconhecer o participante
 * sem depender de capitalização ou acentuação exata.
 */
export function normalizeName(value: string): string {
  return value
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z\s]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}
