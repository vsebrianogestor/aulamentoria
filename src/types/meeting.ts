/**
 * Tipagem de um encontro da mentoria.
 * O campo `released` é a ÚNICA fonte de verdade do estado (liberado/bloqueado).
 * Encontros nunca são liberados automaticamente pela data.
 */
export interface Meeting {
  id: number;
  number: string; // "01", "02", ... (usado apenas para exibição)
  title: string;
  date: string; // formato livre, ex.: "12/08/2025" ou "DD/MM/AAAA"
  description: string;
  released: boolean; // controla se o card é clicável e a modal abre
  recordingUrl: string; // link da gravação em vídeo (vazio => botão desativado)
  transcriptUrl: string; // link da transcrição do encontro (vazio => botão desativado)
  extraMaterialUrl: string; // link do material do encontro (vazio => botão desativado)
  boardUrl: string; // link da lousa/quadro do encontro (vazio => botão desativado)
  taskFormUrl: string; // link do formulário Tally da tarefa (vazio => botão desativado)
  /**
   * Correção da tarefa (opcional). Quando preenchido, adiciona o botão
   * "Correção da tarefa" no modal. Fica oculto quando não há correção
   * (ex.: encontros corrigidos ao vivo na aula).
   */
  taskCorrectionUrl?: string;
  /**
   * Recursos extras específicos do encontro (opcional). Aparecem como uma
   * categoria própria no modal, cada item com seu próprio botão.
   * Ex.: guias práticos, links de vídeos, aula guiada etc.
   */
  extraResources?: { label: string; url: string }[];
  /**
   * Título da categoria de recursos extras (opcional).
   * Padrão: "Guias do encontro".
   */
  extraResourcesLabel?: string;
  /**
   * Divide o encontro em múltiplas partes (opcional). Use quando o mesmo
   * encontro foi realizado em datas/temas diferentes (ex.: continuação em
   * outro dia). Quando presente, o modal substitui os botões únicos de
   * "gravação"/"transcrição" por um bloco compacto por parte; os demais
   * campos do encontro (material, lousa, tarefa) continuam valendo para
   * o encontro como um todo.
   */
  parts?: MeetingPart[];
}

export interface MeetingPart {
  label: string; // "Parte 1", "Parte 2", ...
  date: string;
  theme: string; // assunto tratado nesta parte
  recordingUrl: string; // vazio => botão desativado
  transcriptUrl: string; // vazio => botão desativado
}
