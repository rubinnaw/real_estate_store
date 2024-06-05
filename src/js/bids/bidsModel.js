export default class Bids {
    constructor (){

    }


    async getBids (){
        try {
            const url = `https://jsproject.webcademy.ru/bids`
            const res = await fetch(url)
            const data = await res.json()
            this.bids = await data  
        } catch (error) {
            alert(error)
        }
        
    }
}