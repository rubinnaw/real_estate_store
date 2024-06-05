import FavouritesCards from "./favouritesCardsModel"
import * as view from './favouritesCardsView'



export default async function (state) {
    const favsList = state.favourites.favs
    const favCard = new FavouritesCards(favsList)

    await favCard.getFavs()

    view.renderPage(favCard.cards)

    addToFav()

    function addToFav(){
        Array.from(document.getElementsByClassName('card__like')).forEach((el)=>{
            el.addEventListener('click',(e)=>{
                e.preventDefault()
                const currnetId = e.target.closest('.card').dataset.id
                state.favourites.toggleFav(currnetId)
                view.toggleFavIcon(e.target.closest('.card__like'), state.favourites.isFav(currnetId))
            })
        }) 
    }

}