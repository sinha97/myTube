import React from 'react';
import { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { useDispatch, useSelector } from 'react-redux';
import SuggestedVideo from '../../components/SuggestedVideo/SuggestedVideo';
import { getSubscribedChannel } from '../../redux/actions/videos.action';
import './Subscription.scss';

const SubscriptionScreen = () => {

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getSubscribedChannel())
    },[dispatch]);

    const {loading,videos} = useSelector(state=>state.subscriptionsChannel);

    return (
        <Container fluid>
            {
                !loading? videos?.map(video=> <SuggestedVideo  video={video} kry={video.id} subScreen/>)
                :( 
                    <SkeletonTheme color='#343a40' highlightColor='#3c4147'>
                        <Skeleton width='100%' height='160px' count={20} />
                    </SkeletonTheme>
                )
            }
        </Container>
    )
}

export default SubscriptionScreen;
