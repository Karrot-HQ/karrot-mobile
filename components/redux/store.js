import { createStore, combineReducers } from 'redux';
import { user } from './pages/user';
import { inventory } from './pages/inventory';
import { grocery } from './pages/grocery';

const storeContext = combineReducers({
    user,
    inventory,
    grocery,
});

export default storeContext;
