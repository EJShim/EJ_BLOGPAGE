import * as types from 'actions/E_ActionTypes';
import update from 'react-addons-update';

//Make Reducer
const initialState = {
    footerVisible : true
};


export default function UIManager(state, action) {
    if (typeof state === "undefined")
        state = initialState;

    switch (action.type) {
        case types.TOGGLE_FOOTER:            
            return update(state, {
                    footerVisible : {$set: action.visible}
                }

            );
        default: return state;
    }
}