from flask import request, jsonify
from .models import load_model

model = load_model()

def init_routes(app):
    @app.route('/predict', methods=['POST'])
    def predict():
        try:
            data = request.json
            print("DATOS RECIBIDOS", data)
            features = data['features']
            prediction = model.predict([features])
            return jsonify({'prediction': prediction.tolist()}), 200
        except Exception as e:
            return jsonify({'error': str(e)}), 500