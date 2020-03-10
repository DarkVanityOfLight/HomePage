from flask import Flask, jsonify
from flask_cors import CORS
import json

def getSkillInfo():
    with open("skills.json", "r") as skillFile:
        return json.load(skillFile)

def getProjectInfo():
    with open("projects.json", "r") as projectFile:
        return json.load(projectFile)

def get_about_me_info():
    with open("about-me.json", "r") as about_me_file:
        return json.load(about_me_file)

app = Flask(__name__)
CORS(app)

@app.route("/skills")
def skillApi():
    return json.dumps(getSkillInfo())

@app.route("/projects")
def projectApi():
    return json.dumps(getProjectInfo())

@app.route("/about-me")
def about_me_api():
    return json.dumps(get_about_me_info())

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8000, debug=True)