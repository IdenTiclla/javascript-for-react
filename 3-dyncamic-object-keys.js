const items = {
    'featured-items': ['item1', 'item2'],
    a: 'xd'
}
console.log(items)
console.log(items['featured-items'])
console.log(items.a)

let appState = 'loading'
appState = 'error'

const keyName = 'computer'

const app = {
    [appState]: true
}

app[keyName] = 'apple'

console.log(app)

const state = {
    loading: true,
    name: '',
    job: ''
}

console.log(state)

function updateState(key, value) {
    state[key] = value
}

updateState('name', 'john')
updateState("job", "developer");

console.log(state)