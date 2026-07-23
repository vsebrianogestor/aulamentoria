import { useCallback, useEffect, useState } from "react";
import { PARTICIPANT_NAME_STORAGE_KEY } from "../config/mentorship";

/**
 * Gerencia o nome do participante, persistido apenas no LocalStorage do
 * navegador. Nenhum dado é enviado a servidores externos.
 */
export function useParticipantName() {
  const [name, setName] = useState<string>("");
  const [loaded, setLoaded] = useState(false);

  // Carrega o nome salvo no primeiro render (uma única vez).
  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(PARTICIPANT_NAME_STORAGE_KEY);
      if (saved) setName(saved);
    } catch {
      // Ambiente sem LocalStorage (ex.: modo restrito): segue sem persistência.
    } finally {
      setLoaded(true);
    }
  }, []);

  const saveName = useCallback((value: string) => {
    const trimmed = value.trim();
    setName(trimmed);
    try {
      window.localStorage.setItem(PARTICIPANT_NAME_STORAGE_KEY, trimmed);
    } catch {
      // Se não for possível salvar, o nome permanece apenas na sessão atual.
    }
  }, []);

  return { name, saveName, loaded, hasName: name.trim().length > 0 };
}
