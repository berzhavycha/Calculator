import { observerEventsContainer, Callback, IEvents, ObserverEvents } from "../config/observerEvents"

export interface ISubject {
    subscribe: <T>(eventName: ObserverEvents, callback: Callback<T>) => void,
    unsubscribe: (eventName: ObserverEvents) => void,
    notify: <T>(eventName: ObserverEvents, argc?: T) => void
}

class Subject implements ISubject {
    private events: IEvents;

    constructor() {
        this.events = observerEventsContainer;
    }

    subscribe<T>(eventName: ObserverEvents, callback: Callback<T>) {
        if (!(eventName in this.events)) {
            this.events[eventName] = [];
        }
        this.events[eventName].push(callback);
    }

    unsubscribe(eventName: ObserverEvents) {
        delete this.events[eventName];
    }

    notify<T>(eventName: ObserverEvents, argc?: T) {
        if (eventName in this.events) {
            for (const callback of this.events[eventName]) {
                callback(argc);
            }
        }
    }
}


export default new Subject()