// const app = "I don't do much."

var kittens = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendKitten(cat) {
  return kittens.push(cat)
}

function destructivelyPrependKitten(cat) {
  return kittens.unshift(cat)
}

function destructivelyRemoveLastKitten(cat) {
  return kittens.pop(cat)
}

function destructivelyRemoveFirstKitten(cat) {
  return kittens.shift(cat)
}

function appendKitten(cat) {
  const addKitten = [...kittens, cat]
  return addKitten
}

function prependKitten(cat) {
  const addKitten = [cat, ...kittens]
  return addKitten
}

function removeLastKitten() {
  var removeKitten = kittens.slice(-1)
  kittens = removeLastKitten
  return removeKitten
}
