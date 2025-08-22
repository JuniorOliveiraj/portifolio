import { useEffect, useState } from "react";
import Spline from "@splinetool/react-spline";
import { openDB } from "idb";

// Inicializa o IndexedDB
const initDB = async () => {
  return openDB("SplineCacheDB", 1, {
    upgrade(db) {
      if (!db.objectStoreNames.contains("scenes")) {
        db.createObjectStore("scenes");
      }
    },
  });
};

export default function CachedSpline({ sceneUrl, fallback = <div>Carregando 3D...</div> }) {
  const [cachedUrl, setCachedUrl] = useState(null);

  useEffect(() => {
    let isMounted = true;
    let objectUrl;

    const loadScene = async () => {
      const db = await initDB();

      // Tenta buscar do IndexedDB
      const cachedBlob = await db.get("scenes", sceneUrl);

      if (cachedBlob) {
        objectUrl = URL.createObjectURL(cachedBlob);
        if (isMounted) setCachedUrl(objectUrl);
        return;
      }

      try {
        // Busca do servidor
        const response = await fetch(sceneUrl);
        const blob = await response.blob();

        // Salva no IndexedDB
        await db.put("scenes", blob, sceneUrl);

        objectUrl = URL.createObjectURL(blob);
        if (isMounted) setCachedUrl(objectUrl);
      } catch (err) {
        console.error("Erro ao carregar a cena Spline:", err);
      }
    };

    loadScene();

    return () => {
      isMounted = false;
      if (objectUrl) URL.revokeObjectURL(objectUrl); // Libera memória
    };
  }, [sceneUrl]);

  if (!cachedUrl) return fallback;

  return <Spline scene={cachedUrl} />;
}
