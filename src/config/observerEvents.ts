/* eslint-disable @typescript-eslint/no-explicit-any */
export enum ObserverEvents {
    CALCULATED = 'calculated',
    SHOW_ERROR = 'showError',
    EVALUATE_BUTTON_CLICK = 'evaluateButtonClick'
}

export type Callback<T> = (argc: T) => void;

export type IEvents = {
    [key in ObserverEvents]: Array<Callback<any>>;
};

export const observerEventsContainer: IEvents = {
    [ObserverEvents.CALCULATED]: [],
    [ObserverEvents.SHOW_ERROR]: [],
    [ObserverEvents.EVALUATE_BUTTON_CLICK]: []
};