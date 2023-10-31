import { ISubject } from './Subject'

export interface IObserver {
    update: (observable: ISubject) => void
}