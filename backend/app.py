from flask import Flask, request, jsonify
from flask_pymongo import PyMongo

app = Flask(__name__)
app.config["MONGO_URI"] = "mongodb://mongodb:27017/myWebAppDB"
mongo = PyMongo(app)

@app.route('/signup', methods=['POST'])
def signup():
    data = request.json
    mongo.db.users.insert_one(data)
    return jsonify({"message": "User added successfully"}), 201

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
