// studio/services/crmService.ts
import axios from 'axios';

// URL do seu CRM Django (ajuste para o endereço correto)
const CRM_API_URL = 'http://127.0.0.1:8000/api';

export interface LeadData {
  nome: string;
  email?: string;
  telefone: string;
  origem?: string;
  mensagem?: string;
}

export const crmService = {
  /**
   * Envia um lead do site para o CRM
   */
  async enviarLead(dados: LeadData) {
    try {
      const response = await fetch(`${CRM_API_URL}/lead/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dados),
      });

      if (!response.ok) {
        throw new Error(`Erro ${response.status}: ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Erro ao enviar lead para o CRM:', error);
      throw error;
    }
  },
  /**
   * Busca clientes (se precisar no futuro)
   */
  async listarClientes() {
    const response = await axios.get(`${CRM_API_URL}/clientes/`);
    return response.data;
  },

  /**
   * Busca um cliente por telefone
   */
  async buscarClientePorTelefone(telefone: string) {
    const response = await axios.get(`${CRM_API_URL}/clientes/?telefone=${telefone}`);
    return response.data;
  }
};