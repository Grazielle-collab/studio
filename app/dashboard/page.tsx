// studio/app/dashboard/page.tsx
"use client";

import { useEffect, useState } from "react";

export default function Dashboard() {
  const [clientes, setClientes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/clientes/")
      .then((res) => res.json())
      .then((data) => {
        setClientes(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-light mb-8">📊 Dashboard</h1>
      
      {loading ? (
        <p>Carregando...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <p className="text-sm text-gray-500">Total de Clientes</p>
            <p className="text-4xl font-bold">{clientes.length}</p>
          </div>
          {/* Adicione mais métricas aqui */}
        </div>
      )}
    </div>
  );
}