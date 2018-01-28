#!/bin/bash

curl --include --request PATCH "https://glacial-woodland-13268.herokuapp.com/sightings/${ID}" \
--header "Content-type: application/json" \
--data '{
  "sighting": {
    "bird": "'"${BIRD}"'",
    "characteristics": "'"${CHARS}"'",
    "body_color": "'"${COLOR}"'"
  }
}'

echo
