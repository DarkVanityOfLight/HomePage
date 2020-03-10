from flask import Flask, jsonify
from flask_cors import CORS
import json


def get_skill_info():
    """
    :return: JsonObject Returns a json Object with the stored skills
    """

    # Open the skill.json file in Read Mode as skill File
    with open("skills.json", "r") as skillFile:

        # Return the loaded file as json object
        return json.load(skillFile)


def get_project_info():
    """
    :return: JsonObject Returns a json Object with the stored projects
    """

    # Open the project.json file in Read Mode as projectFile
    with open("projects.json", "r") as projectFile:

        # Return the loaded file as json object
        return json.load(projectFile)


def get_about_me_info():
    """
    :return: JsonObject Returns a json Object with the stored about-me infos
    """

    # Open the about-me.json file in Read Mode as about_me_file
    with open("about-me.json", "r") as about_me_file:

        # Returns the loaded file as json object
        return json.load(about_me_file)


app = Flask(__name__)
CORS(app)


@app.route("/skills")
def skill_api_endpoint():
    return json.dumps(getSkillInfo())


@app.route("/projects")
def project_api_endpoint():
    return json.dumps(getProjectInfo())


@app.route("/about-me")
def about_me_api_endpoint():
    return json.dumps(get_about_me_info())


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8000, debug=True)
