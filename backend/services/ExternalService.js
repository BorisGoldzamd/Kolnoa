const axios = require('axios');

class ExternalService {
  static async sendEmail(to, subject, message) {
    // Lógica para enviar un correo electrónico
  }

  static async makePayment(amount, cardDetails) {
    // Lógica para procesar un pago
  }

  // Otros métodos de integración externa...
}

module.exports = ExternalService;
