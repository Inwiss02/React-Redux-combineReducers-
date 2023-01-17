import React, { useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    counter_incremented,
    counter_decremented,
    counter_incrementedBy,
    counter_incrementedByValue,
    counter_Reset
} from "../store/counterReducer";
import {
    loggedIn,
    loggedOut
} from "../store/loggedReducer";
function Project() {
    const [valueC, setValue] = useState();
    const count = useSelector((state) => state.counter.count);
    const loggedCheck = useSelector((state) => state.logged.logged);
    const dispatch = useDispatch();
    function formatCount(){
        let classes = "badge bg-";
        return count > 0 ? (classes+="secondary"):(classes+="warning");
    }
    return (
        <div className="m-3">
            <nav className="navbar bg-dark p-2">
                <h1 style={{color : "white"}}>React-Redux (combineReducers)</h1>
                {loggedCheck ? <button className="btn btn-secondary ms-auto" onClick={()=>dispatch(loggedOut)}>logout</button>:<button className="btn btn-secondary ms-auto" onClick={()=>dispatch(loggedIn)}>login</button>}                
            </nav>
            {loggedCheck ? 
            <div>
                <h2>Counter</h2>
            <button className="btn btn-danger" onClick={() => dispatch(counter_decremented)} disabled={count === 0?"disabled":""}>decrement</button>
            <h3><span className={formatCount()}>{count > 0 ? count : "zero" }</span></h3>
            <button className="btn btn-primary" onClick={() => dispatch(counter_incremented)}>increment</button>
            <button className="btn btn-primary ms-3" onClick={() => dispatch(counter_incrementedBy)}>decrementBy5</button>
            <button className="btn btn-warning ms-3" onClick={() => dispatch(counter_Reset)}>Reset</button>
            <hr />
            <input type="number"  onChange={(e) => setValue(e.target.value)} />
            <button className="btn btn-primary ms-3" value={valueC} onClick={() => dispatch(counter_incrementedByValue(parseInt(valueC) >= 0 ? parseInt(valueC) : 0))}>incrementBy</button>
            </div> :
            <React.Fragment>
            </React.Fragment>
            }
        </div>
    );
}

export default Project;