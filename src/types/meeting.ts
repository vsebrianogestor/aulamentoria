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
  recordingUrl: string; // link da gravação (vazio => botão desativado)
  extraMaterialUrl: string; // link do material complementar em PDF
  assignmentUrl: string; // link da tarefa em PDF (enunciado para leitura)
  taskFormUrl: string; // link do formulário Tally da tarefa (vazio => botão desativado)
}
