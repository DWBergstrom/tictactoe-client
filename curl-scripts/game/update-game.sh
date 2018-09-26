
# sh curl-scripts/json/update-game.sh

curl "https://tic-tac-toe-wdi.herokuapp.com/games/${GAMEID}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
    "game": {
      "id": "'"${GAMEID}"'",
      "cell": {
        "index": "'"${INDEX}"'",
        "value": "'"${VALUE}"'"
      },
      "over": false
    }
  }'

echo
