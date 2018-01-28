#!/bin/bash

curl --include --request POST "https://glacial-woodland-13268.herokuapp.com/sightings" \
--header "Content-type: application/json" \
--data '{
  "sighting": {
    "bird": "'"${BIRD}"'",
    "characteristics": "'"${CHARS}"'",
    "body_color": "'"${COLOR}"'"
  }
}'

echo
