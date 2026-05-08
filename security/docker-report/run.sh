#!/bin/bash

# Usar network host (recomendado)
docker run --network host -t -u root -v $(pwd):/zap/wrk zaproxy/zap-stable zap-baseline.py -t http://localhost:3000 -r report.html
