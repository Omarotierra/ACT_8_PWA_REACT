from flask import Flask, request, jsonify
from flask_cors import CORS
from sendgrid import SendGridAPIClient
from sendgrid.helpers.mail import Mail

app = Flask(__name__)
CORS(app) 
@app.route('/send_message', methods=['POST'])
def send_message():
    data = request.json
    message = Mail(
        from_email=data['email'],
        to_emails='2omarhernandez2@gmail.com',
        subject='Nuevo mensaje de contacto',
        html_content=f"""
            <strong>Nombre:</strong> {data['firstName']} {data['lastName']}<br>
            <strong>Ceo electróorrnico:</strong> {data['email']}<br>
            <strong>Mensaje:</strong> {data['message']}
        """
    )
    
    try:
# aqui poner la línea de código
        response = sg.send(message)
        return jsonify({"message": "Mensaje enviado correctamente"}), 200
    except Exception as e:
        return jsonify({"message": "Hubo un error al enviar el mensaje", "error": str(e)}), 500

if __name__ == '__main__':
    app.run(port=5000)
