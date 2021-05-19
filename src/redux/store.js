import {createStore,applyMiddleware,combineReducers} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import {authReducer} from './reducers/auth.reducer';
import {homeVideosReducer,relatedVideoReducer,channelVideosReducer} from './reducers/videos.reducer';
import {selectedVideoReducer,searchedVideosReducer,subscriptionChannelReducer} from './reducers/videos.reducer';
import {channelDetailsReducer} from './reducers/channel.reducer';
import { commentListReducer } from './reducers/comments.reducer'


const rootReducer = combineReducers({
    auth : authReducer,
    homeVideos : homeVideosReducer,
    selectedVideo : selectedVideoReducer,
    channelDetails : channelDetailsReducer,
    commentList: commentListReducer,
    relatedVideos: relatedVideoReducer,
    searchedVideos: searchedVideosReducer,
    subscriptionsChannel: subscriptionChannelReducer,
    channelVideos: channelVideosReducer
})

const middleware = [thunk];


const store = createStore(
    rootReducer,
    {},
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;