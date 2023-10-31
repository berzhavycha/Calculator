import { IObserver } from "./Observer"

export interface ISubjectState {
    result: number | null,
    error: string | null
}

export interface ISubject {
    getState: () => ISubjectState,
    subscribe: (observer: IObserver) => void,
    unsubscribe: (observer: IObserver) => void
    notify: () => void
}

export class Observable implements ISubject {
    private state: ISubjectState = { result: null, error: null }
    private observers: IObserver[] = []

    getState() {
        return this.state
    }

    subscribe(observer: IObserver) {
        this.observers.push(observer)
    }

    unsubscribe(observer: IObserver) {
        const observerIndex = this.observers.indexOf(observer)
        if (observerIndex > -1) {
            this.observers.splice(observerIndex, 1)
        } else {
            console.log('Observer doesn`t exist')
        }

    }

    notify() {
        for (const observer of this.observers) {
            observer.update(this)
        }
    }

    updateState(newState: ISubjectState): void {
        this.state = newState;
        this.notify();
    }

}