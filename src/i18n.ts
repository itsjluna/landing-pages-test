import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Placeholder translations. Can be extended easily.
const resources = {
  en: {
    translation: {
      "Contact Us": "Contact Us",
      "If we don't win, you don't pay us": "If we don't win, you don't pay us",
      "Schedule your appointment to evaluate your case": "Schedule your appointment to evaluate your case",
      "Business Consultation Banner": "Schedule a Business Consultation with Shev Law Group",
      "Success Stories": "Success Stories",
      "About the Attorney": "About the Attorney",
      "Frequently Asked Questions": "Frequently Asked Questions",
      "First Name": "First Name",
      "Last Name": "Last Name",
      "Email": "Email",
      "Phone": "Phone",
      "Submit": "Submit",
      "Toggle Language": "ES",
      "Personal Injury": "Personal Injury",
      "Immigration": "Immigration",
      "Business Law": "Business Law"
    }
  },
  es: {
    translation: {
      "Contact Us": "Contáctanos",
      "If we don't win, you don't pay us": "Si no ganamos no nos pagas",
      "Schedule your appointment to evaluate your case": "Agenda tu cita para evaluar tu caso",
      "Business Consultation Banner": "Agenda una consulta de negocios con Shev Law Group",
      "Success Stories": "Casos de Éxito",
      "About the Attorney": "Sobre el Abogado",
      "Frequently Asked Questions": "Preguntas Frecuentes",
      "First Name": "Nombre",
      "Last Name": "Apellido",
      "Email": "Correo",
      "Phone": "Teléfono",
      "Submit": "Enviar",
      "Toggle Language": "EN",
      "Personal Injury": "Daños Personales",
      "Immigration": "Inmigración",
      "Business Law": "Derecho Corporativo"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en", // default language
    fallbackLng: "en",
    interpolation: {
      escapeValue: false 
    }
  });

export default i18n;
