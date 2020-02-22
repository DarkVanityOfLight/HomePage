#!/bin/sh
echo "Starting ng server..."
cd ./HomePageFrontend/
ng serve --host 0.0.0.0>../ng.log&

echo "Starting flask server..."
cd ../HomePageBackend
pipenv run python server.py>../flask.log&

