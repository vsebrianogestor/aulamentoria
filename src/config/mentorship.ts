/**
 * Configurações gerais da mentoria.
 *
 * Centralize aqui as informações que aparecem em toda a interface.
 * Para trocar a EMPRESA atendida, altere apenas `companyName` abaixo —
 * o nome nunca deve ser espalhado manualmente pelos componentes.
 */
export const mentorshipConfig = {
  mentorshipName: "Mentoria de Implantação de Tráfego Pago Interno",
  companyName: "NOME DA EMPRESA",
  mentorName: "Vinícius Sebriano",
  supportText: "Conteúdos, materiais e tarefas dos encontros",
} as const;

/** Chave usada para salvar o nome do participante no navegador (LocalStorage). */
export const PARTICIPANT_NAME_STORAGE_KEY = "mentoria_participant_name";
