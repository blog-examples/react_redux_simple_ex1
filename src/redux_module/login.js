const LOGIN ='login/LOGIN';
const LOGOUT = 'loginLOGOUT';
const CHANGE_INPUT_EMAIL = "login/CHANGE_INPUT_EMAIL";

export const login = (email) => ({type: LOGIN, email});
export const logout = () => ({type: LOGOUT});
export const changeInputEmail = (email) => ({type: CHANGE_INPUT_EMAIL, email});

const initialState = {
    input_email : null,
    loginUserInfo : {
        email: "로그인하지않음",
    }
};

function loginReducer(state = initialState, action){
    switch (action.type){
        case LOGIN:
            return {
                ...state,
                loginUserInfo: {
                    email: action.email
                }
            }
        case LOGOUT:
            return {
                ...state,
                loginUserInfo: {
                    email: "로그인하지않음"
                }
            }
        case CHANGE_INPUT_EMAIL:
            return {
                ...state,
                input_email: action.email
            }    
        default:
            return state
    }
};

export default loginReducer;