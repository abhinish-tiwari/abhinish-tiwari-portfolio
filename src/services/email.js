import emailjs from '@emailjs/browser';

const EMAIL_CONFIG = {
  SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  TEMPLATE_ID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
};

export const sendEmail = async (formData) => {
  try {
    const response = await emailjs.send(
      EMAIL_CONFIG.SERVICE_ID,
      EMAIL_CONFIG.TEMPLATE_ID,
      formData,
      EMAIL_CONFIG.PUBLIC_KEY
    );
    return { success: true, data: response };
  } catch (error) {
    console.error('Email send failed:', error);
    return { success: false, error: error.message };
  }
};

