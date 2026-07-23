import type { Meeting } from "../types/meeting";

/**
 * CRONOGRAMA DOS 12 ENCONTROS
 * ---------------------------------------------------------------------------
 * Este é o único arquivo que precisa ser editado para manter o portal:
 *
 *  • Liberar um encontro .... troque `released: false` para `released: true`
 *  • Ajustar a data ......... edite o campo `date`
 *  • Adicionar os links ..... preencha `recordingUrl`, `extraMaterialUrl`
 *                             e `assignmentUrl`
 *
 * Regras importantes:
 *  • `released` é a fonte de verdade do estado (não use a data para liberar).
 *  • Não invente links. Deixe "" enquanto o material não estiver disponível —
 *    o botão correspondente aparecerá desativado automaticamente.
 *  • Não guarde antecipadamente links de encontros ainda bloqueados.
 */
export const meetings: Meeting[] = [
  {
    id: 1,
    number: "01",
    title: "Diagnóstico inicial e entendimento do negócio",
    date: "DD/MM/AAAA",
    description:
      "Mapeamento do modelo de negócio, objetivos, serviços prioritários, público, processo comercial e cenário atual da operação.",
    released: true,
    recordingUrl: "",
    extraMaterialUrl: "",
    assignmentUrl: "",
  },
  {
    id: 2,
    number: "02",
    title: "Fundamentos de tráfego pago e lógica de aquisição",
    date: "DD/MM/AAAA",
    description:
      "Entendimento da função do tráfego pago e da conexão entre campanhas, marketing, atendimento e vendas.",
    released: false,
    recordingUrl: "",
    extraMaterialUrl: "",
    assignmentUrl: "",
  },
  {
    id: 3,
    number: "03",
    title: "Estrutura de campanha, planejamento, mensuração e traqueamento",
    date: "DD/MM/AAAA",
    description:
      "Planejamento inicial das campanhas e introdução aos principais conceitos de pixel, eventos, conversões e rastreamento.",
    released: false,
    recordingUrl: "",
    extraMaterialUrl: "",
    assignmentUrl: "",
  },
  {
    id: 4,
    number: "04",
    title: "Meta Ads: estrutura, objetivos e públicos",
    date: "DD/MM/AAAA",
    description:
      "Compreensão da estrutura do Meta Ads, objetivos de campanha, públicos, distribuição de verba e remarketing.",
    released: false,
    recordingUrl: "",
    extraMaterialUrl: "",
    assignmentUrl: "",
  },
  {
    id: 5,
    number: "05",
    title: "Meta Ads: criativos, copy e tomada de decisão",
    date: "DD/MM/AAAA",
    description:
      "Análise do papel dos criativos e da comunicação, além das principais métricas utilizadas para tomar decisões.",
    released: false,
    recordingUrl: "",
    extraMaterialUrl: "",
    assignmentUrl: "",
  },
  {
    id: 6,
    number: "06",
    title: "Google Ads: intenção de busca e estrutura de campanha",
    date: "DD/MM/AAAA",
    description:
      "Entendimento da intenção de busca, campanhas de pesquisa, grupos de anúncios, palavras-chave e termos pesquisados.",
    released: false,
    recordingUrl: "",
    extraMaterialUrl: "",
    assignmentUrl: "",
  },
  {
    id: 7,
    number: "07",
    title: "Google Ads: anúncios, recursos e otimização",
    date: "DD/MM/AAAA",
    description:
      "Construção e análise de anúncios, utilização de recursos, negativação de termos e identificação de desperdícios.",
    released: false,
    recordingUrl: "",
    extraMaterialUrl: "",
    assignmentUrl: "",
  },
  {
    id: 8,
    number: "08",
    title: "Página, WhatsApp, atendimento e qualidade do lead",
    date: "DD/MM/AAAA",
    description:
      "Análise do caminho do lead após o clique e dos fatores que influenciam atendimento, conversão e qualidade.",
    released: false,
    recordingUrl: "",
    extraMaterialUrl: "",
    assignmentUrl: "",
  },
  {
    id: 9,
    number: "09",
    title: "Métricas essenciais e leitura de resultados",
    date: "DD/MM/AAAA",
    description:
      "Interpretação das principais métricas e diferenciação entre indicadores de mídia e resultados comerciais.",
    released: false,
    recordingUrl: "",
    extraMaterialUrl: "",
    assignmentUrl: "",
  },
  {
    id: 10,
    number: "10",
    title: "Rotina de otimização e acompanhamento semanal",
    date: "DD/MM/AAAA",
    description:
      "Criação de uma rotina prática para acompanhar verba, testes, campanhas, resultados e próximos ajustes.",
    released: false,
    recordingUrl: "",
    extraMaterialUrl: "",
    assignmentUrl: "",
  },
  {
    id: 11,
    number: "11",
    title: "Aplicação prática e revisão da estrutura",
    date: "DD/MM/AAAA",
    description:
      "Revisão das campanhas, públicos, anúncios, palavras-chave, métricas e possíveis erros estruturais.",
    released: false,
    recordingUrl: "",
    extraMaterialUrl: "",
    assignmentUrl: "",
  },
  {
    id: 12,
    number: "12",
    title: "Plano de continuidade e autonomia operacional",
    date: "DD/MM/AAAA",
    description:
      "Organização da rotina futura, próximos testes e plano de ação para a continuidade da operação interna.",
    released: false,
    recordingUrl: "",
    extraMaterialUrl: "",
    assignmentUrl: "",
  },
];
