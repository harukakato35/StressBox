const USE_PROFILE= "USE_PROFILE";


const initialState = {
    useProfile: null,
    useFirestoreForPeople: true,
}


export default function reducer(state=initialState, action) {
    console.log(action);
    switch (action.type){
        case USE_PROFILE:
            return {
                ...state,
                useProfile: null,
                useFirestoreForPeople: true,
            };


        default: return state

    }
}