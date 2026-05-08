#!/bin/bash

set -e

base_dir=$(pwd)

postman_dir="$base_dir/postman"
results_dir="$base_dir/newman/results-newman"

mkdir -p "$results_dir"

docker run --rm -t \
  -v "$postman_dir":/postman \
  -v "$results_dir":/results \
  --add-host host.docker.internal:host-gateway \
  postman/newman \
  run "/postman/collections/collection of.postman_collection.json" \
  -e "/postman/enviroment/juice shop enviroment.postman_environment.json" \
  --env-var "urlBase=http://host.docker.internal:3000" \
  -r cli,json \
  --reporter-json-export /results/report.json
