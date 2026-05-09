#!/bin/bash

newman run ../postman/collections/collection\ of.postman_collection.json --env-var "urlBase=http://localhost:3000/" -r htmlextra --reporter-htmlextra-export results-newman/report.html
