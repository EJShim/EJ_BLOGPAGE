import {TOGGLE_FOOTER} from 'actions/E_ActionTypes';

export function footerState(visible){
    return(
        {
            type:TOGGLE_FOOTER,
            visible
        }
    );
}

export function toggleFooter(visible) {
    return (dispatch) => {
        // Inform Login API is starting
        dispatch(footerState(visible));
    };
};


