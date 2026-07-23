import { useState } from "react";
import { DesktopGuard } from "./components/DesktopGuard";
import { Header } from "./components/Header";
import { WelcomeModal } from "./components/WelcomeModal";
import { MeetingCard } from "./components/MeetingCard";
import { MeetingModal } from "./components/MeetingModal";
import { useParticipantName } from "./hooks/useParticipantName";
import { meetings } from "./data/meetings";
import type { Meeting } from "./types/meeting";

export default function App() {
  const { name, saveName, loaded, hasName } = useParticipantName();
  const [isEditing, setIsEditing] = useState(false);
  const [selectedMeeting, setSelectedMeeting] = useState<Meeting | null>(null);

  // Evita "piscar" a janela de boas-vindas antes de ler o LocalStorage.
  const showWelcome = loaded && !hasName;
  const showEdit = loaded && hasName && isEditing;

  const handleSaveName = (value: string) => {
    saveName(value);
    setIsEditing(false);
  };

  return (
    <DesktopGuard>
      <div className="flex min-h-screen flex-col bg-paper">
        <Header participantName={name} onEditName={() => setIsEditing(true)} />

        <main className="mx-auto w-full max-w-[1360px] flex-1 px-10 py-12 animate-page-in">
          {/* Área de abertura */}
          <section className="mb-10">
            <h2 className="font-display text-4xl text-ink tracking-display">
              Painel da mentoria
            </h2>
            <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-muted">
              Acesse as gravações, os materiais complementares e as tarefas
              disponibilizadas após cada encontro.
            </p>
          </section>

          {/* Grade dos 12 encontros: 3 colunas (desktop menor) a 4 colunas. */}
          <section
            aria-label="Encontros da mentoria"
            className="grid grid-cols-3 gap-6 xl:grid-cols-4"
          >
            {meetings.map((meeting) => (
              <MeetingCard
                key={meeting.id}
                meeting={meeting}
                onOpen={setSelectedMeeting}
              />
            ))}
          </section>
        </main>
      </div>

      {/* Primeiro acesso: solicita o nome do participante. */}
      {showWelcome && <WelcomeModal mode="welcome" onSubmit={handleSaveName} />}

      {/* Edição do nome já salvo. */}
      {showEdit && (
        <WelcomeModal
          mode="edit"
          initialName={name}
          onSubmit={handleSaveName}
          onClose={() => setIsEditing(false)}
        />
      )}

      {/* Detalhes do encontro liberado. */}
      {selectedMeeting && (
        <MeetingModal
          meeting={selectedMeeting}
          onClose={() => setSelectedMeeting(null)}
        />
      )}
    </DesktopGuard>
  );
}
