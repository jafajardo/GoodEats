import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import restaurantReducer from './reducers-restaurants';
import userReducer from './reducers-user';

const rootReducer = combineReducers({
  form: formReducer,
  restaurants: restaurantReducer,
  user: userReducer
})

export default rootReducer;