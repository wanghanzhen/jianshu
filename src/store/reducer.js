import { combineReducers } from 'redux';
import { reducer as HeaderReducer} from '../common/header/store';
import { reducer as HomeReducer } from '../pages/home/store';

const reducer = combineReducers({
  header: HeaderReducer,
  home: HomeReducer
});

export default reducer;