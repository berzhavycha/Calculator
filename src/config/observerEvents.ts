/* eslint-disable @typescript-eslint/no-explicit-any */

export enum ObserverEvents {
  CALCULATED = 'calculated',
  SHOW_ERROR = 'showError',
  EVALUATE_BUTTON_CLICK = 'evaluateButtonClick',
  EVALUATE_EXPRESSION = 'evaluateExpression',
}

export type Callback<T> = (argc: T) => void;

export const observerEventsContainer: Record<ObserverEvents, Array<Callback<any>>> = {
  [ObserverEvents.CALCULATED]: [],
  [ObserverEvents.SHOW_ERROR]: [],
  [ObserverEvents.EVALUATE_BUTTON_CLICK]: [],
  [ObserverEvents.EVALUATE_EXPRESSION]: [],
};
