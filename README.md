# quantron-test

# curl commands examples
## setHeroStats:
`curl -X POST http://localhost:3000/superhero/setHeroStats -H 'Content-Type: application/json' -d '{"name":"me","strength":0,"dexterity":0,"intellect":1,"isInvincible":false}'`

## getHeroStats:
`curl http://localhost:3000/superhero/getHeroStats`

## uploadHeroImage:
`curl -F "image=@<path_to_file>" http://localhost:3000/superhero/uploadHeroImage`

## getHeroImage:
http://localhost:3000/superhero/getHeroImage
