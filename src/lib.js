const {log, logG, logger} = require("../tools/logger").logger()

function doRecursivelyIterate(data, depth, noRepeat, eachCb, doRecursivelyIterate) {
  if (depth === -1) return

  var i=0, len=data.length;
  for (i; i < len; i++) {

    if (depth === 0) {
      // console.log(`doRecursivelyIterate - data[i]: ${data[i]}, depth: ${depth}`)
      // makeEachCb([data[i]], depth)(null);
      eachCb(null, data[i], depth)
      continue
    }

    let dataArg = data
    if (noRepeat) {
      dataArg = [].concat(data); dataArg.splice(i, 1)
    }

    doRecursivelyIterate(dataArg, depth-1, noRepeat, (v) => {
      // console.log(`doRecursivelyIterate - data[i]: ${data[i]}, v: ${v}, depth: ${depth}`)
      eachCb(v, data[i], depth)
    }, doRecursivelyIterate)
  }
}

function recursivelyIterate(data, depth, noRepeat, eachCb, recursivelyIterate) {
  doRecursivelyIterate(data, depth, noRepeat, (v, data, depth) => {
    // console.log(
    //   "recursivelyIterate - data: ", data,
    //   ", v: ", v, ", depth: ", depth)

    eachCb((v) ? [data].concat(v) : [data])
  }, recursivelyIterate)
}

// class Reject {}
/*
function doRecursivelyIterate(data, depth, noRepeat, eachCb, doRecursivelyIterate) {
  // console.log(`depth: ${depth}`)

  if (depth === -1) return

  // let prefix = ''
  // for (var x = 0; x < depth; x++) {
  //   prefix += '  '
  // }

  var i=0, len=data.length;
  for (i; i < len; i++) {

    if (depth === 0) {eachCb([data[i]]); continue}

    let dataArg = data
    if (noRepeat) {
      dataArg = [].concat(data); dataArg.splice(i, 1)
    }

    doRecursivelyIterate(dataArg, depth-1, noRepeat, (v) => {
      eachCb([data[i]].concat(v))
    }, doRecursivelyIterate)
  }
}

function recursivelyIterate(data, noRepeat) {
  permutations = []

  doRecursivelyIterate(data, data.length-1, noRepeat, (v) => {
    console.log(v); permutations.push(v)
  }, doRecursivelyIterate)

  console.log(permutations.length)
  return permutations
  // recursivelyIterate(data, data.length-1, null, (v) => {
  //   console.log(v)
  // }, recursivelyIterate)
}
*/


class Pair extends Array {
  constructor(l, r) {
    super(l, r)
  }
}

class Pairs extends Array {
  constructor(...pairs) {
    pairs.forEach((pair) => {if (pair instanceof Pair) throw new Error()})
    super(...pairs)
  }
}

function* CartesianProduct(arr) {

}

function cartesianProductSync(arr) {
  // const pairs = new Pairs()
  //
  // arr.forEach(left => arr.forEach(
  //   right => pairs.push(new Pair(left, right)))
  // )
  //
  // return pairs

  const pairs = new Pairs()
  doRecursivelyIterate(arr, 1, null, (v) => {
    pairs.push(new Pair(v[0], v[1]))
  }, doRecursivelyIterate)

  return Pairs
}

function* CartesianProduct(arr) {

}

function permutations(arr) {

}

// function getTrails() {}

// get all possible paths
function paths(edges) {

}

// create a graph from given vertices, wherein every vertice is
// adjacent to every other vertice
function connectAll(vertices) {
  return cartesianProductSync(vertices)
}

module.exports = {
  cartesianProductSync,
  recursivelyIterate, doRecursivelyIterate, // permutations,
  Pair, Pairs,
  logs: logger.logs, logger
}
