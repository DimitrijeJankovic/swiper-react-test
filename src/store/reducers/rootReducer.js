import galleryPageReducer from './galleryPageReducer'
import mainPageReducer from './mainPageReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    main: mainPageReducer,
    gallery: galleryPageReducer
})

export default rootReducer