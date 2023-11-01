export interface ISubject {
    subscribe: (eventName: string, callback: Callback) => void,
    unsubscribe: (eventName: string) => void
    notify: <T>(eventName: string, argc?: T) => void
}

type Callback = <T>(argc: T) => void

interface IEvents {
    [key: string]: Array<Callback>
}

class Subject implements ISubject {
    private events: IEvents = {}

    subscribe(eventName: string, callback: Callback) {
        if (!(eventName in this.events)) {
            this.events[eventName] = []
        }
        this.events[eventName].push(callback)
    }

    unsubscribe(eventName: string) {
        delete this.events[eventName]
    }

    notify<T>(eventName: string, argc?: T) {
        if (eventName in this.events) {
            for (const callback of this.events[eventName]) {
                callback(argc)
            }
        }
    }
}

export default new Subject()