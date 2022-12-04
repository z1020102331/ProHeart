# import Api as Api
# import Api as Api
from flask import Flask, request, jsonify
from flask_cors import CORS
import requests
from flask_jsonpify import jsonify
# from resources import core
from flask.logging import create_logger
import logging

app = Flask(__name__)
CORS(app)


@app.route("/")
def hello():
    # return jsonify({'correction': core().correction, "lacune": core().lacune})
    html = f"<h3>Heart Failure Prediction</h3>"
    return html.format(format)


if __name__ == '__main__':
    app.run(port=5000)
