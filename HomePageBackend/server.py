from flask import Flask, jsonify
from flask_cors import CORS
import json

def getSkillInfo():
    with open("skills.json", "r") as skillFile:
        return json.load(skillFile)

app = Flask(__name__)
CORS(app)

@app.route("/skills")
def skillApi():
    return json.dumps(getSkillInfo())

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8000, debug=True)