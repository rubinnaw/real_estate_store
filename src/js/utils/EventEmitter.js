export default class EventEmitter {
    constructor() {
        this.events = {}
    }


    emit(eventName, data){
        const event = this.events[eventName]
        if (event) {
            event.forEach(element => {
                element.call(null,data)
            });
        }
    }

    subscribe(eventName, fn){
        if (!this.events[eventName]) {
            this.events[eventName] = []
        }

        this.events[eventName].push(fn)
        return () =>{
            this.events[eventName] = this.events[eventName].filter(
                (ev) => fn !== ev
            )
        }
    }
}