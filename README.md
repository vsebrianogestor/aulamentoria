# Portal da Mentoria de Implantação de Tráfego Pago Interno

Portal web responsivo, leve e estático, que centraliza os **12 encontros** da
mentoria — funciona bem em computador, tablet e celular.
Após cada aula liberada, o participante acessa, por links externos:

- 🎥 Gravação do encontro
- 📄 Material complementar (PDF)
- ✅ Tarefa do encontro (PDF)

Os encontros futuros aparecem **bloqueados**; os liberados abrem uma janela com
os três recursos. O portal **não hospeda** vídeos nem arquivos — tudo é acessado
por links externos (Google Drive, YouTube não listado, Loom etc.).

> Identidade visual **Bela Gazela** (monocromática, elegante) e tipografia de
> destaque **VIBERATE**. Nenhum backend, banco de dados ou login.

---

## Tecnologia

- [React](https://react.dev) + [TypeScript](https://www.typescriptlang.org)
- [Vite](https://vitejs.dev)
- [Tailwind CSS](https://tailwindcss.com)
- Ícones [Lucide React](https://lucide.dev)
- `LocalStorage` para guardar apenas o nome do participante (no navegador)

---

## Como instalar

Requer [Node.js](https://nodejs.org) 18 ou superior.

```bash
npm install
npm run dev
```

O terminal mostrará um endereço local (ex.: `http://localhost:5173`).

## Como gerar a versão de produção

```bash
npm run build
```

Os arquivos finais ficam na pasta `dist/`. Para pré-visualizar o resultado:

```bash
npm run preview
```

---

## Como manter o portal (dia a dia)

Toda a manutenção é feita em **dois arquivos**, sem mexer nos componentes.

### Como alterar o nome da empresa

Edite **`src/config/mentorship.ts`** e troque o valor de `companyName`:

```ts
export const mentorshipConfig = {
  mentorshipName: "Mentoria de Implantação de Tráfego Pago Interno",
  companyName: "NOME DA EMPRESA", // ← troque aqui
  mentorName: "Vinícius Sebriano",
  supportText: "Conteúdos, materiais e tarefas dos encontros",
};
```

O nome aparece automaticamente em toda a interface (não é preciso alterá-lo em
mais nenhum lugar).

### Como alterar datas

Edite **`src/data/meetings.ts`** e ajuste o campo `date` do encontro desejado:

```ts
date: "12/08/2025",
```

### Como liberar um encontro

No mesmo arquivo `src/data/meetings.ts`, troque o campo `released` do encontro:

```ts
released: false, // encontro bloqueado
```

para

```ts
released: true, // encontro liberado
```

> O campo `released` é a **única** fonte do estado. Os encontros **não** são
> liberados automaticamente pela data.

### Como adicionar os links

Ainda em `src/data/meetings.ts`, preencha os três campos de link do encontro:

```ts
recordingUrl: "https://link-da-gravacao",       // gravação (vídeo)
extraMaterialUrl: "https://link-do-material",    // material complementar (PDF)
assignmentUrl: "https://link-da-tarefa",         // tarefa (PDF)
```

- Enquanto um campo estiver vazio (`""`), o botão correspondente aparece
  **desativado** com "Ainda não disponível" — sem gerar erro.
- **Não invente links.** Deixe `""` até o material existir e evite guardar
  antecipadamente links de encontros ainda bloqueados.

### Como receber as respostas da tarefa (formulário Tally)

Cada encontro tem um botão **"Realizar tarefa"** que abre um pop-up com um
formulário [Tally](https://tally.so) incorporado. As respostas caem no seu
painel do Tally (e você recebe aviso por e-mail) — o portal continua estático,
sem backend.

Para habilitar em um encontro:

1. Crie uma conta grátis no [Tally](https://tally.so) e monte o formulário da
   tarefa.
2. **(Recomendado) Pré-preenchimento do nome:** adicione um campo (ex.: "Nome")
   e, nas opções do campo, em *"URL parameter / prefill"*, defina a chave como
   `nome`. O portal envia o nome do participante automaticamente nesse
   parâmetro, então você sempre sabe quem respondeu.
3. Copie o link do formulário (ex.: `https://tally.so/r/XXXXXX`) e cole no
   campo `taskFormUrl` do encontro, em `src/data/meetings.ts`:

```ts
taskFormUrl: "https://tally.so/r/XXXXXX",
```

- Enquanto `taskFormUrl` estiver vazio (`""`), o botão "Realizar tarefa" fica
  **desativado** ("Ainda não disponível").
- O campo `assignmentUrl` (PDF) continua sendo o **enunciado** da tarefa para
  leitura; o `taskFormUrl` é onde o participante **envia as respostas**. Você
  pode usar os dois ou apenas um deles.

---

## Como publicar

O projeto é um site estático. Depois de `npm run build`, publique a pasta
`dist/`.

### Vercel

1. Importe o repositório em [vercel.com](https://vercel.com).
2. Framework Preset: **Vite**.
3. Build Command: `npm run build` · Output Directory: `dist`.
4. Clique em **Deploy**.

### Netlify

1. Importe o repositório em [netlify.com](https://netlify.com).
2. Build command: `npm run build` · Publish directory: `dist`.
3. Clique em **Deploy**.

> Também funciona em GitHub Pages ou em qualquer hospedagem estática
> equivalente (o `base: "./"` no `vite.config.ts` mantém os caminhos relativos).

---

## Trocar a fonte VIBERATE

Os arquivos da fonte ficam em `public/fonts/` e são declarados em
`src/index.css` (bloco `@font-face` da família `"Viberate"`). Para usar outra
fonte, substitua os arquivos ou ajuste esse bloco.

---

## Privacidade

- O nome do participante é salvo **apenas** no navegador (LocalStorage), na
  chave `mentoria_participant_name`. Nada é enviado a servidores.
- Sem cookies de rastreamento, sem analytics.
- A página inclui `<meta name="robots" content="noindex, nofollow" />`.
