import React from "react";
import { useReducer } from "react";
import TotalDisplay from "./components/TotalDisplay";
import CalcButton from "./components/CalcButton";
import reducer, { initialState } from "./reducers";
import {
  applyNumber,
  changeOperation,
  addMemorytoTotal,
  resetMemory,
  addMemory,
  clearDisplay,
} from "./actions";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleApplyNumber = (e) => {
    dispatch(applyNumber(Number(e.target.value)));
  };

  const handleOperation = (e) => {
    dispatch(changeOperation(e.target.value));
  };
  const handleClearOperation = (e) => {
    dispatch(clearDisplay(e.target.value));
  };

  const handleAddMemory = (e) => {
    dispatch(addMemory(e.target.value));
  };

  const handleTotalMemory = (e) => {
    dispatch(addMemorytoTotal(e.target.value));
  };

  const handleResetMemory = (e) => {
    dispatch(resetMemory(e.target.value));
  };

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-brand"> Reducer Challenge</span>
      </nav>

      <div className="container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            <TotalDisplay value={state.total} />
            <div className="row details">
              <span id="operation">
                <b>Operation:</b> {state.operation}
              </span>
              <span id="memory">
                <b>Memory:</b> {state.memory}
              </span>
            </div>

            <div className="row">
              <CalcButton value={"M+"} onClick={handleAddMemory} />
              <CalcButton value={"MR"} onClick={handleTotalMemory} />
              <CalcButton value={"MC"} onClick={handleResetMemory} />
            </div>

            <div className="row">
              <CalcButton value={1} onClick={handleApplyNumber} />
              <CalcButton value={2} onClick={handleApplyNumber} />
              <CalcButton value={3} onClick={handleApplyNumber} />
            </div>

            <div className="row">
              <CalcButton value={4} onClick={handleApplyNumber} />
              <CalcButton value={5} onClick={handleApplyNumber} />
              <CalcButton value={6} onClick={handleApplyNumber} />
            </div>

            <div className="row">
              <CalcButton value={7} onClick={handleApplyNumber} />
              <CalcButton value={8} onClick={handleApplyNumber} />
              <CalcButton value={9} onClick={handleApplyNumber} />
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={handleOperation} />
              <CalcButton value={"*"} onClick={handleOperation} />
              <CalcButton value={"-"} onClick={handleOperation} />
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick={handleClearOperation} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
