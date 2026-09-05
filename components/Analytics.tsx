// studio/components/Analytics.tsx
"use client";

import { useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";

interface AnalyticsProps {
  empresaId: number;
}

export default function Analytics({ empresaId }: AnalyticsProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [sessionId, setSessionId] = useState("");

  useEffect(() => {
    // Gera ou recupera session_id
    let sid = localStorage.getItem("analytics_session_id");
    if (!sid) {
      sid = `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
      localStorage.setItem("analytics_session_id", sid);
    }
    setSessionId(sid);

    // Registrar visita
    const registrarVisita = async () => {
      try {
        const origem = searchParams.get('origem') || 'direto';
        const dispositivo = /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent) ? 'mobile' : 'desktop';
        const navegador = navigator.userAgent.split(' ').pop() || 'desconhecido';

        // Buscar localização (opcional)
        let cidade = '';
        let estado = '';
        let pais = '';
        try {
          const geoRes = await fetch('https://ipapi.co/json/');
          const geoData = await geoRes.json();
          cidade = geoData.city || '';
          estado = geoData.region || '';
          pais = geoData.country_name || '';
        } catch (geoError) {
          console.log('Geolocalização não disponível');
        }

        await fetch('http://127.0.0.1:8000/api/visita/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            empresa_id: empresaId,
            pagina: pathname,
            origem: origem,
            dispositivo: dispositivo,
            navegador: navegador,
            cidade: cidade,
            estado: estado,
            pais: pais,
            session_id: sid,
          }),
        });
      } catch (error) {
        console.error('Erro ao registrar visita:', error);
      }
    };

    registrarVisita();
  }, [pathname, searchParams, empresaId]);

  return null;
}