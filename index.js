// Write your solution here!
var cats = ['Milo','Otis','Garfield'];

function destructivelyAppendCat(cat){
   return cats.push(cat)
}

function destructivelyPrependCat(cat){
    return cats.unshift(cat)
}

function destructivelyRemoveLastCat(){
    cats.pop()
    return cats
}

function destructivelyRemoveFirstCat(){
    cats.shift()
    return cats
}

function appendCat(name){
    return [...cats,name]
}

function prependCat(name){
    return [name, ...cats]
}

function removeLastCat(name){
    return cats.slice(0,-1)
}

function removeFirstCat(name){
    return cats.slice(1,)
}

