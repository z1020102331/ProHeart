import numpy as np
from flask import Flask, request, jsonify
import pickle

from flask_cors import CORS

app = Flask(__name__)

CORS(app)
model = pickle.load(open('model.pkl', 'rb'))


@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json(force=True)
    list_data = list(data.values())
    converted_data = np.array(list_data).reshape(1, -1)
    prediction = model.predict_proba(converted_data)
    output = f'{prediction[0][0] * 100:.1f}'
    print(data)
    print(output)
    return jsonify(output)


if __name__ == '__main__':
  app.run(port=5000, debug=True)
