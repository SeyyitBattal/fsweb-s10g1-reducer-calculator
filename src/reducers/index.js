import {
  ADD_MEMORY,
  ADD_ONE,
  APPLY_NUMBER,
  CHANGE_MEMORY,
  CHANGE_OPERATION,
  CLEAR_DISPLAY,
  RESET_MEMORY,
} from "./../actions";

export const initialState = {
  total: 0,
  operation: "+",
  memory: 0,
};

const calculateResult = (num1, num2, operation) => {
  switch (operation) {
    case "+":
      return num1 + num2;
    case "*":
      return num1 * num2;
    case "-":
      return num1 - num2;
    default:
      return;
  }
};

const reducer = (state, action) => {
  switch (action.type) {
    case ADD_ONE:
      return {
        ...state,
        total: state.total + 1,
      };

    case APPLY_NUMBER:
      return {
        ...state,
        total: calculateResult(state.total, action.payload, state.operation),
      };

    case CHANGE_OPERATION:
      return {
        ...state,
        operation: action.payload,
      };

    case CLEAR_DISPLAY:
      return {
        ...state,
        total: 0,
      };

    case ADD_MEMORY:
      return {
        ...state,
        memory: state.total,
      };
    case CHANGE_MEMORY:
      return {
        ...state,
        total: state.total + state.memory,
      };
    case RESET_MEMORY:
      return {
        ...state,
        memory: 0,
      };

    default:
      return state;
  }
};

export default reducer;
