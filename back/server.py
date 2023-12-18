import os
import json
import codecs
# import cors
from flask import Flask, request, jsonify
from flask_cors import CORS

# app = Flask(__name__)


port = int(os.environ.get('PORT', 5000))
app = Flask(__name__, static_folder='client/build', static_url_path='/')
CORS(app)

@app.route('/')
def index():
    return app.send_static_file('index.html')

@app.route('/api/get-params', methods=['GET'])
def get_params():
    with codecs.open("data.json", "r", encoding="utf-8") as f:
        data = json.load(f)
    return jsonify(data)

@app.route('/api/save-params', methods=['POST'])
def save_params():
    data = request.json
    print(data,'REQ')
    parsed_data = json.loads(data['data'])
    print(parsed_data,'parsed_data')
    with open('data.json', 'w', encoding="utf-8") as f:
        json.dump(parsed_data, f,ensure_ascii=False, indent=4)
    return 'ok'

if __name__ == 'main':
    app.run(port=port)