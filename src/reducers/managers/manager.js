class E_Manager{
  constructor(){
    console.log("Manager Initialized");
  }
};

const _manager = new E_Manager();

//Make Reducer
const initialState = {
    manager: _manager
};


export default function Manager(state, action) {
    if(typeof state === "undefined")
        state = initialState;

    switch(action.type){
      default:
        return state;
    }
}
