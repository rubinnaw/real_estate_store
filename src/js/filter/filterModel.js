export default class Filter {
    constructor () {
        this.query = ''
    }

    async getParams (){
        try {
            const url = 'https://jsproject.webcademy.ru/itemsinfo'
            const res = await fetch(url)
            const data = await res.json()
            this.params = await data
        } catch (error) {
            alert(error)
        }
    }

    async getResults() {
        try {
            const url = `https://jsproject.webcademy.ru/items${this.query}`
            const res = await fetch(url)
            const data = await res.json()
            this.result = await data
        } catch (error) {
            alert(error)
        }
    }
}