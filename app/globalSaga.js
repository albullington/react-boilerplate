// Define sagas in global in order to use in configureStore
import HomePageSaga from './containers/HomePage/saga';
import ListPageSaga from './containers/ListPage/saga';

const createSaga = [HomePageSaga, ListPageSaga];

export default createSaga;
