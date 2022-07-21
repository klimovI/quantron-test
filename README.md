# quantron-test

# curl examples
## setHeroStats:
`curl -X POST http://localhost:3000/superhero/setHeroStats -H 'Content-Type: application/json' -d '{"name":"me","strength":0,"dexterity":0,"intellect":0,"isInvincible":false}'`

## getHeroStats:
`curl http://localhost:3000/superhero/getHeroStats`

## uploadHeroImage:
`curl -k -X POST -F 'image=https://play-lh.googleusercontent.com/sTgPKkub8kxY3hdtdWmopNLO311PMQN7W0b-928YtZlVjZNcgAXpwSmStw9zSZGKbLx_' -v  http://localhost:3000/superhero/uploadHeroImage`

## getHeroImage:
http://localhost:3000/superhero/getHeroImage
