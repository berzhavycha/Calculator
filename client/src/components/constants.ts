export const INITIAL_BUTTON_PER_ROW = 4;

export const DATA_ATTRIBUTE_BUTTON = "data-calc-btn";

export const ENTER_CALCULATE_BUTTON = "Enter";

export const BACKSPACE = "⌫";

export const EVALUATE = "=";

export const calculatorViewConstants = {
  MIN_BUTTON_VALUE: 1,
  MAX_BUTTON_VALUE: 9,
  NUMBERS_COLUMNS_AMOUNT: 3,
  THRESHOLD_ROW_LEVEL: 4,
  NUMBERS_AMOUNT: 10,
  BUTTON_WIDTH: 102,
  BUTTON_MIN_WIDTH: 70,
  GAP: 16,
};

export const operatorButtonClasses = {
  PADDING: "p-2",
  BACKGROUND_COLOR: "bg-green-400",
  TEXT_COLOR: "text-white",
  BORDER_RADIUS: "rounded",
  HOVER: "hover:bg-green-500",
  HEIGHT: "h-10",
  WIDTH: "w-20",
};

export const specialOperatorButtonClasses = {
  PADDING: "p-2",
  BACKGROUND_COLOR: "bg-gray-400",
  TEXT_COLOR: "text-white",
  BORDER_RADIUS: "rounded",
  HOVER: "hover:bg-gray-500",
  HEIGHT: "h-10",
  WIDTH: "w-20",
};

export const evaluateButtonClasses = {
  PADDING: "p-2",
  BACKGROUND_COLOR: "bg-purple-700",
  TEXT_COLOR: "text-white",
  BORDER_RADIUS: "rounded",
  HOVER: "hover:bg-purple-800",
  HEIGHT: "h-10",
  WIDTH: "w-20",
};

export const numberButtonClasses = {
  PADDING: "p-2",
  BACKGROUND_COLOR: "bg-indigo-400",
  TEXT_COLOR: "text-white",
  BORDER_RADIUS: "rounded",
  HOVER: "hover:bg-blue-700",
  HEIGHT: "h-10",
  WIDTH: "w-20",
};

export const rowWrapperClasses = {
  DISPLAY: "flex",
  MARGIN: "mb-4",
  GAP: "gap-8",
};

export enum ButtonType {
  NUMERIC = "numeric",
  OPERATOR = "operator",
  SPECIAL_OPERATOR = "specialOperator",
  EVALUATE = "evaluate",
}

type IButtonClasses = {
  [key in ButtonType]: {
    PADDING: string;
    BACKGROUND_COLOR: string;
    TEXT_COLOR: string;
    BORDER_RADIUS: string;
    HOVER: string;
    HEIGHT: string;
  };
};

export const buttonClasses: IButtonClasses = {
  numeric: numberButtonClasses,
  operator: operatorButtonClasses,
  specialOperator: specialOperatorButtonClasses,
  evaluate: evaluateButtonClasses,
};

export enum SpecialOperators {
  DOT = ".",
  CLEAR_ALL = "C",
  LEFT_BRACKET = "(",
  RIGHT_BRACKET = ")",
}

export enum MathOperators {
  PLUS = "+",
  MINUS = "-",
  MULTIPLICATION = "*",
  DIVISION = "/",
  SIN = "sin",
  COS = "cos",
  TAN = "tan",
  FACTORIAL = "!",
  MODULATION = "%",
}

export const zeroAndOperatorsLine = [
  {
    content: `${SpecialOperators.DOT}`,
    type: ButtonType.NUMERIC,
  },
  {
    content: `${0}`,
    type: ButtonType.NUMERIC
  },
  {
    content: `${EVALUATE}`,
    type: ButtonType.EVALUATE,
  }
]