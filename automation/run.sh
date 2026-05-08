#!/bin/bash
docker start juice-shop


docker run --rm --network host cypress-test:latest
