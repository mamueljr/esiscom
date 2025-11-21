import { GoogleGenAI } from "@google/genai";

// Initialize the Gemini client
// Note: In a real production app, you might proxy this through a backend to hide the key,
// but for this demo architecture, we use it directly as per instructions.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateChatResponse = async (history: { role: string, text: string }[], newMessage: string): Promise<string> => {
  try {
    const model = 'gemini-2.5-flash';
    
    // Construct the chat history for the model
    // We map 'user'/'model' to the API expected format if necessary, 
    // but usually managing state locally and sending a fresh "contents" or using sendMessage is best.
    // Here we will use the chat session feature.
    
    const chat = ai.chats.create({
      model: model,
      config: {
        systemInstruction: `Eres "Asistente ESISCOM", un agente de soporte virtual experto y amable para la empresa ESISCOM en Chihuahua, México.
        
        Tus objetivos son:
        1. Ayudar a clientes potenciales a entender los servicios de ESISCOM (Reparación de hardware, Soporte Técnico, Desarrollo de Software).
        2. Guiar a los usuarios a la sección de "Soporte Remoto" si tienen una urgencia técnica.
        3. Proporcionar información de contacto: (614) 254-1066, contacto@esiscom.com, dirección: Cipres #3712, Col. Satelite.
        4. Si preguntan por precios específicos, diles que depende del diagnóstico y sugiéreles agendar una cita.
        
        Tono: Profesional, técnico pero accesible, y muy servicial. Respuestas concisas.
        `,
      },
      history: history.map(h => ({
        role: h.role,
        parts: [{ text: h.text }]
      }))
    });

    const result = await chat.sendMessage({
      message: newMessage
    });

    return result.text || "Lo siento, tuve un problema procesando tu solicitud. Por favor contacta al soporte humano.";
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    return "Actualmente nuestros sistemas de IA están en mantenimiento. Por favor llama al (614) 254-1066.";
  }
};