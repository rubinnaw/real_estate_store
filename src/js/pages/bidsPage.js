import bids from "../bids/bidsController"

export default function (state) {
    document.querySelector('#app').innerHTML = ''
    
    bids(state)
    // const markup = `<div class="container"><h1>Bids Page</h1></div>`
    // document.querySelector('#app').innerHTML = markup
}