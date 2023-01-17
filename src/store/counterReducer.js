

//initialeState
const initialeState = {
    count: 5
}

//actions
const counter_Reset ={type:"Reset"};

const counter_incremented ={type:"incremented"};

const counter_decremented ={type:"decremented"};

const counter_incrementedBy ={type:"incrementedBy",payload:5}

const counter_incrementedByValue =(value)=>{
    return {
        type:"incrementedByValue",
        Value:value
    } ;

};

//exportation des action
export{counter_Reset,counter_incremented,counter_decremented,counter_incrementedBy,counter_incrementedByValue};

//reducer
const counterReducer = (state = initialeState, action) => {
    switch (action.type) {
        case "Reset":
            return {...state,count :0};
        case "incremented":
            return {
                ...state,
                count: state.count + 1
            };
        case "decremented":
            return {
                ...state, count: state.count - 1
            };
        case "incrementedBy":
            return {
                ...state, 
                count: state.count + action.payload
            };
        case "incrementedByValue":
            return{
                ...state,
                count : state.count + action.Value
            };
        default:
            return state;
    }
};
//exportation de reducer
export {counterReducer};