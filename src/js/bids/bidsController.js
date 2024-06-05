import Bids from './bidsModel'
import * as view from './bidsView'

export default async function (state) {

    if (!state.bids) {
        state.bids = new Bids()
    }

    await state.bids.getBids()
    view.renderBids(state.bids.bids)
}