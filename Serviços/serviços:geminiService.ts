import { GoogleGenAI } from "@google/genai";
import { COMPANY_INFO, SERVICES, PRICING } from '../constants';

// Nota: A chave da API deve ser configurada no ambiente de hospedagem (Vercel/Netlify)
const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

const systemPrompt = `
Você é o assistente virtual inteligente da "${COMPANY_INFO.name}".
Seu objetivo é ajudar clientes a entenderem nossos serviços e agendarem horários.

INFORMAÇÕES DA EMPRESA:
- Nome: ${COMPANY_INFO.name}
- Slogan: ${COMPANY_INFO.tagline}
- Contato: ${COMPANY_INFO.contact.whatsapp} / ${COMPANY_INFO.contact.email}
- Endereço: ${COMPANY_INFO.contact.address}

SERVIÇOS OFERECIDOS:
${SERVICES.map(s => `- ${s.title}: ${s.description}`).join('\n')}

PREÇOS:
${PRICING.map(p => `- ${p.name}: ${p.price} (${p.features.join(', ')})`).join('\n')}

REGRAS DE COMPORTAMENTO:
1. Seja educado, profissional e "cool" (estilo jovem e moderno).
2. O foco principal é vender o estúdio de PODCAST. Sempre tente direcionar para isso.
3. Responda de forma concisa (máximo 2 ou 3 frases por resposta, a menos que peçam detalhes).
4. Se perguntarem como agendar, peça para clicar no botão de WhatsApp ou usar o formulário de contato do site.
5. Não invente preços que não estão na lista.
`;

export const sendMessageToGemini = async (message: string, history: {role: string, parts: {text: string}[]}[] = []) => {
  // Se não houver chave, retornamos um erro simulado amigável para não quebrar o site visualmente
  if (!apiKey) {
    console.warn("API Key missing");
    return "Olá! No momento estou em manutenção, mas você pode chamar nossa equipe no WhatsApp!";
  }

  try {
    const chat = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: systemPrompt,
      },
      history: history, 
    });

    const result = await chat.sendMessage({
        message: message
    });

    return result.text;
  } catch (error) {
    console.error("Error communicating with Gemini:", error);
    return "Desculpe, tive um pequeno problema técnico. Poderia tentar novamente ou nos chamar no WhatsApp?";
  }
};