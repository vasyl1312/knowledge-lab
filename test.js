// Facts about people
const people = {
  homer: 'male',
  bart: 'male',
  abe: 'male',

  marge: 'female',
  lisa: 'female',
  maggie: 'female',
  mona: 'female',
}

// Facts about parent-child relationships
const parentChild = {
  homer: ['bart', 'lisa', 'maggie'], //dad and children
  marge: ['bart', 'lisa', 'maggie'], // mom and children

  abe: ['homer'], // grandfather and children
  mona: ['homer'], // grandmother and children
}

// Rules for determining family relationships
function isMother(x, y) {
  return parentChild[x] && parentChild[x].includes(y) && people[x] === 'female'
}

function isFather(x, y) {
  return parentChild[x] && parentChild[x].includes(y) && people[x] === 'male'
}

function isSon(x, y) {
  return parentChild[y] && parentChild[y].includes(x) && people[x] === 'male'
}

function isDaughter(x, y) {
  return parentChild[y] && parentChild[y].includes(x) && people[x] === 'female'
}

function isGrandparent(x, y) {
  return (
    parentChild[x] &&
    Object.keys(parentChild).some((t) => parentChild[x].includes(t) && parentChild[t].includes(y))
  )
}

// Example usage
console.log(isMother('marge', 'bart')) // true
console.log(isFather('homer', 'maggie')) // true
console.log(isSon('bart', 'abe')) // false
console.log(isDaughter('lisa', 'homer')) // true
console.log(isGrandparent('mona', 'bart')) // true
console.log(isGrandparent('abe', 'lisa')) // true
console.log(isGrandparent('abe', 'homer')) // false
