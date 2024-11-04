#!/usr/bin/env bash
# Use this script to start the docker containers

docker compose up -d --build

# Copy node modules from src container to host filesystem
docker cp "$(docker compose ps -q reactjs)":/reactjs/node_modules ./reactjs
