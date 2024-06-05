import SingleItem from "./singleItemModel"
import * as view from './singleItemView'

export default async function (state) {

    state.singleItem = new SingleItem(state.routeParams)
    await state.singleItem.getItem()

    view.render(state.singleItem.result, state.favourites.isFav(state.singleItem.id))

    document.querySelector('.button-order').addEventListener('click', ()=>{
        view.showModal()
    })

    document.querySelector('.modal__close').addEventListener('click', ()=>{
        view.hideModal()
    })

    document.querySelector('.modal-wrapper').addEventListener('click', (e)=>{
        if(e.target.closest('.modal')){
            return null
        }else{
            view.hideModal()
        }
    })

    document.querySelector('.modal__form').addEventListener('submit', async (e)=>{
        e.preventDefault()
        const formData = view.getInput()
        await state.singleItem.submitForm(formData)

        if (state.singleItem.response.message ===  'Bid Created') {
            alert('Заявка успешно отправлена')
            view.hideModal()
            view.clearInput()
        }else if (state.singleItem.response.message ===  'Bid Not Created'){
            state.singleItem.response.errors.forEach(element => {
                alert(element)
            });
        }
    })

    document.querySelector('#addToFavs').addEventListener('click', ()=>{
        state.favourites.toggleFav(state.singleItem.id)
        view.toggleFavButton(state.favourites.isFav(state.singleItem.id))
    })
}