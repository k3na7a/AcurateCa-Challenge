import { configureStore } from '@reduxjs/toolkit';
import appReducer, { 
    // asyncAction
 } from './appSlice';

export default configureStore({  
    reducer: {
        app: appReducer
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware( 
            { 
                thunk: { 
                    extraArgument: [
                        // Add asyncAction Here
                    ] 
                }, 
                serializableCheck: false 
            }
        )
})