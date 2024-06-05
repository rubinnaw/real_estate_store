export default class SingleItem {
    constructor(id){
        this.id = id
    }

    async getItem(){
        try {
            const url = `https://jsproject.webcademy.ru/items/${this.id}`
            const res = await fetch(url)
            const data = await res.json()
            this.result = await data
        } catch (error) {
            alert(error)
        }
    }

    async submitForm(formData){
        const url = `https://jsproject.webcademy.ru/bidnew`

        const res = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-type' : 'application/json; charset=UTF-8'
            },
            body: JSON.stringify(formData)
        })

        const data = await res.json()
        this.response = await data
        

    }
}