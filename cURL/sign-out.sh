#!/bin/bash

curl "https://glacial-woodland-13268.herokuapp.com/sign-out" \
--include \
--request DELETE \
--header "Content-Type: application/json" \
--header "Authorization: Token token=${TOKEN}"

echo
