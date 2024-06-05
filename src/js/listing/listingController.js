import * as view from './listingView'


export default function (state) {
    view.render()


    state.results.forEach(card => {
        view.renderCard(card, state.favourites.isFav(card.id))
    });

    addToFav()

    state.emitter.subscribe('event: render-listing', ()=>{
        view.clearListingContainer()

        state.results.forEach(card => {
            view.renderCard(card, state.favourites.isFav(card.id))
        }); 

        addToFav()
    })

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


