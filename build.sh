#!/usr/bin/env bash
$(aws ecr get-login --no-include-email --region us-east-1)
npm install
npm run build
docker build -t voicefront-console .
docker tag voicefront-console:latest 941133320273.dkr.ecr.us-east-1.amazonaws.com/voicefront-console:latest
docker push 941133320273.dkr.ecr.us-east-1.amazonaws.com/voicefront-console:latest
