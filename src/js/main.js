import homePage from './pages/homePage'
import singleItem from './pages/singleItemPage'
import favouritesPage from './pages/favouritesPage'
import errorPage from './pages/errorPage'
import bidsPage from './pages/bidsPage'
import EventEmitter from './utils/EventEmitter'
import Favourites from './favourites/favouritesModel'

const state = {
    results : [],
    emitter : new EventEmitter(),
    favourites : new Favourites()
}


window.state = state

const routes = [
    { path: '/', component: homePage },
    { path: 'item', component: singleItem },
    { path: 'favourites', component: favouritesPage },
    { path: 'bids', component: bidsPage },
]

function findComponentByPath (path, routes) {
    return routes.find((route) =>{
        return route.path === path
    })
}

function router () {
    const pathArray = location.hash.split('/')
    let currentPath = pathArray[0] === '' ? '/' : pathArray[1]

    currentPath = currentPath === '' ? '/' : currentPath

    state.routeParams = pathArray[2] ? pathArray[2] : ''

    const {component = errorPage} = findComponentByPath(currentPath, routes) || {}
    component(state);
}

window.addEventListener('hashchange', router)
window.addEventListener('load', router)