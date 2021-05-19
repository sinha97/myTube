import axios from 'axios';

const request = axios.create({
    baseURL:'https://youtube.googleapis.com/youtube/v3/',
    params: {
        key: "AIzaSyDiEu-2-jj1Q6lh6ttBy8iTWzAFB3YCJUI",
    },
})

export default request;