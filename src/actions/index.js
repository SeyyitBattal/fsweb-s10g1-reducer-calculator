export const ADD_ONE = "ADD_ONE";
export const CLEAR_DISPLAY = "CLEAR_DISPLAY";
export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const ADD_MEMORY = "ADD_MEMORY";
export const CHANGE_MEMORY = "CHANGE_MEMORY";
export const RESET_MEMORY = "RESET_MEMORY";

export const addOne = () => {
  return { type: ADD_ONE };
};

export const applyNumber = (number) => {
  return { type: APPLY_NUMBER, payload: number };
};

// ChangeOperation eklendi ...

export const changeOperation = (operation) => {
  return { type: CHANGE_OPERATION, payload: operation };
};

export const clearDisplay = (total) => {
  return { type: CLEAR_DISPLAY, payload: total };
};

export const addMemory = (memory) => {
  return { type: ADD_MEMORY, payload: memory };
};

export const addMemorytoTotal = (total) => {
  return { type: CHANGE_MEMORY, payload: total };
};

export const resetMemory = (memory) => {
  return { type: RESET_MEMORY, payload: memory };
};
