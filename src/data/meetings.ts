import type { Meeting } from "../types/meeting";

/**
 * CRONOGRAMA DA MENTORIA (12 encontros + 1 extra)
 * ---------------------------------------------------------------------------
 * Este é o único arquivo que precisa ser editado para manter o portal:
 *
 *  • Liberar um encontro .... troque `released: false` para `released: true`
 *  • Ajustar a data ......... edite o campo `date`
 *  • Adicionar os links ..... preencha `recordingUrl` (gravação em vídeo),
 *                             `transcriptUrl` (transcrição) e
 *                             `extraMaterialUrl` (material do encontro)
 *  • Lousa do encontro ...... preencha `boardUrl`
 *  • Guias/extras ........... use `extraResources` (lista de { label, url })
 *                             para recursos específicos do encontro
 *  • Tarefa ................. cole o link do Tally em `taskFormUrl`
 *
 * Regras importantes:
 *  • `released` é a fonte de verdade do estado (não use a data para liberar).
 *  • Não invente links. Deixe "" enquanto o material não estiver disponível —
 *    o botão correspondente aparecerá desativado automaticamente.
 *  • Não guarde antecipadamente links de encontros ainda bloqueados.
 *
 * Observação sobre o cronograma:
 *  • Encontros às terças e sextas. Não houve encontro em 21/08 e 25/08.
 *  • O tema original do 3º encontro foi dividido: o Encontro 03 trata de
 *    "Estrutura de campanha e planejamento" e há um Encontro Extra
 *    (entre o 8º e o 9º) dedicado a "Mensuração e traqueamento".
 */
export const meetings: Meeting[] = [
  {
    id: 1,
    number: "01",
    title: "Diagnóstico inicial e entendimento do negócio",
    date: "24/07",
    description:
      "Mapeamento do modelo de negócio, objetivos, serviços prioritários, público, processo comercial e cenário atual da operação.",
    released: true,
    recordingUrl:
      "https://drive.google.com/file/d/1UMy88GRF38fgoD9FnRI9FC15wY-7WXBE/view?usp=drivesdk",
    transcriptUrl:
      "https://docs.google.com/document/d/1IytTzFBorNdjawne_hRDI4HnAmhUMN_KqhPUMCcyfGo/edit?tab=t.m58zk6qtz4to",
    extraMaterialUrl: "/materiais/aula-01-material-extra.pdf",
    boardUrl: "/materiais/aula-01-lousa.pdf",
    taskFormUrl: "https://tally.so/r/GxjMEj",
  },
  {
    id: 2,
    number: "02",
    title: "Fundamentos de tráfego pago e lógica de aquisição",
    date: "04/08",
    description:
      "Entendimento da função do tráfego pago e da conexão entre campanhas, marketing, atendimento e vendas.",
    released: true,
    recordingUrl:
      "https://drive.google.com/file/d/1bDbASoc2Aagb2O0t1HS46m-3cnoVeHNW/view",
    transcriptUrl: "/materiais/aula-02-transcricao.html",
    extraMaterialUrl: "/materiais/aula-02-material-extra.pdf",
    boardUrl: "/materiais/aula-02-lousa.pdf",
    taskFormUrl: "https://tally.so/r/zxA0j0",
  },
  {
    id: 3,
    number: "03",
    title: "Estrutura de campanha e planejamento",
    date: "11/08",
    description:
      "Planejamento inicial das campanhas: estrutura, organização e definição das primeiras campanhas a serem testadas.",
    released: true,
    recordingUrl:
      "https://drive.google.com/file/d/1Cd7qlQ6aBIBrrox16GoqEeSBvNjIDEWE/view",
    transcriptUrl:
      "https://docs.google.com/document/d/1iFl7ff4RYbMLvOO4QxhCDbiWKHwlPVra508h-aAqFTg/edit?usp=drivesdk",
    extraMaterialUrl: "/materiais/aula-03-material-extra.pdf",
    boardUrl: "/materiais/aula-03-lousa.pdf",
    taskFormUrl: "https://tally.so/r/PdQ2MV",
  },
  {
    id: 4,
    number: "04",
    title: "Meta Ads: estrutura, objetivos e públicos",
    date: "14/08",
    description:
      "Compreensão da estrutura do Meta Ads, objetivos de campanha, públicos, distribuição de verba e remarketing.",
    released: true,
    recordingUrl:
      "https://drive.google.com/file/d/1e0-kEVGCgv1VHHlB7WGFue3y3wkqxiCK/view",
    transcriptUrl:
      "https://docs.google.com/document/d/1VZF-UIwdA_LyzCYTonxMkW6n6X4MoaqxuuvSK3al5bw/edit?tab=t.9ue8yv6rzdb6",
    extraMaterialUrl: "/materiais/aula-04-material-extra.pdf",
    boardUrl: "/materiais/aula-04-lousa.pdf",
    taskFormUrl: "https://tally.so/r/BzJga1",
    extraResources: [
      {
        label: "Guia prático de objetivos de campanha",
        url: "/materiais/aula-04-guia-objetivos.pdf",
      },
      {
        label: "Guia para criação da BM (Business Manager)",
        url: "/materiais/aula-04-guia-bm.pdf",
      },
    ],
  },
  {
    id: 5,
    number: "05",
    title: "Meta Ads: criativos, copy e tomada de decisão",
    date: "18/08",
    description:
      "Análise do papel dos criativos e da comunicação, além das principais métricas utilizadas para tomar decisões.",
    released: true,
    recordingUrl:
      "https://drive.google.com/file/d/1YILPC_sQIAE_Lbt043Srr_qN4nS3aR2Q/view?usp=sharing",
    transcriptUrl:
      "https://docs.google.com/document/d/1sR6USE2UrkvQYcMESysQahoCdhfzMjOu5QFkp28Xp0s/edit?usp=sharing",
    extraMaterialUrl: "/materiais/aula-05-material-extra.pdf",
    boardUrl: "/materiais/aula-05-lousa.pdf",
    taskFormUrl: "https://tally.so/r/VL6KLM",
  },
  {
    id: 6,
    number: "06",
    title: "Google Ads: intenção de busca e estrutura de campanha",
    date: "28/08",
    description:
      "Entendimento da intenção de busca, campanhas de pesquisa, grupos de anúncios, palavras-chave e termos pesquisados.",
    released: true,
    recordingUrl:
      "https://drive.google.com/file/d/12VMk-Lqi0FtQMypt9oJ_eda2N1k0STjq/view?usp=sharing",
    transcriptUrl:
      "https://docs.google.com/document/d/18AuGAybKmsHSViSF62T2ffTYdJ7MdGWmZuoX7KBpw14/edit?usp=sharing",
    extraMaterialUrl: "",
    boardUrl: "/materiais/aula-06-lousa.pdf",
    taskFormUrl: "",
  },
  {
    id: 7,
    number: "07",
    title: "Google Ads: ORQUESTRA. Como pensar qualquer campanha no Google Ads",
    date: "01/09",
    description:
      "Construção e análise de anúncios, utilização de recursos, negativação de termos e identificação de desperdícios.",
    released: true,
    recordingUrl:
      "https://drive.google.com/file/d/18VO0MJ3BwYL9T9WAAeyLiyKoUxpjAoEu/view?usp=sharing",
    transcriptUrl:
      "https://docs.google.com/document/d/1WplKEgtXpCga3IvsBeYHa6llDnXFlA6JBuB3xb1ikGU/edit?usp=sharing",
    extraMaterialUrl: "",
    boardUrl: "/materiais/aula-07-lousa.pdf",
    taskFormUrl: "",
  },
  {
    id: 8,
    number: "08",
    title: "Página, WhatsApp, atendimento e qualidade do lead",
    date: "04/09",
    description:
      "Análise do caminho do lead após o clique e dos fatores que influenciam atendimento, conversão e qualidade.",
    released: false,
    recordingUrl: "",
    transcriptUrl: "",
    extraMaterialUrl: "",
    boardUrl: "",
    taskFormUrl: "",
  },
  {
    id: 9,
    number: "Extra",
    title: "Mensuração e traqueamento",
    date: "08/09",
    description:
      "Conceitos de pixel, eventos, conversões e rastreamento para medir e acompanhar corretamente os resultados das campanhas.",
    released: false,
    recordingUrl: "",
    transcriptUrl: "",
    extraMaterialUrl: "",
    boardUrl: "",
    taskFormUrl: "",
  },
  {
    id: 10,
    number: "09",
    title: "Métricas essenciais e leitura de resultados",
    date: "11/09",
    description:
      "Interpretação das principais métricas e diferenciação entre indicadores de mídia e resultados comerciais.",
    released: false,
    recordingUrl: "",
    transcriptUrl: "",
    extraMaterialUrl: "",
    boardUrl: "",
    taskFormUrl: "",
  },
  {
    id: 11,
    number: "10",
    title: "Rotina de otimização e acompanhamento semanal",
    date: "15/09",
    description:
      "Criação de uma rotina prática para acompanhar verba, testes, campanhas, resultados e próximos ajustes.",
    released: false,
    recordingUrl: "",
    transcriptUrl: "",
    extraMaterialUrl: "",
    boardUrl: "",
    taskFormUrl: "",
  },
  {
    id: 12,
    number: "11",
    title: "Aplicação prática e revisão da estrutura",
    date: "18/09",
    description:
      "Revisão das campanhas, públicos, anúncios, palavras-chave, métricas e possíveis erros estruturais.",
    released: false,
    recordingUrl: "",
    transcriptUrl: "",
    extraMaterialUrl: "",
    boardUrl: "",
    taskFormUrl: "",
  },
  {
    id: 13,
    number: "12",
    title: "Plano de continuidade e autonomia operacional",
    date: "22/09",
    description:
      "Organização da rotina futura, próximos testes e plano de ação para a continuidade da operação interna.",
    released: false,
    recordingUrl: "",
    transcriptUrl: "",
    extraMaterialUrl: "",
    boardUrl: "",
    taskFormUrl: "",
  },
];
