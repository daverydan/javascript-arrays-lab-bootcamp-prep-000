// const app = "I don't do much."

var kittens = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendKitten(cat) {
  return kittens.push(cat)
}

function destructivelyPrependKitten(cat) {
  return kittens.unshift(cat)
}
