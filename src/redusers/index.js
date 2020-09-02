import { combineReducers } from 'redux';

const songsReduser = () => {
    return [
       {title: 'Wretched and Divine', duration: '3:38'},
       {title: 'Resurrect the sun', duration: '4:29'},
       {title: "Nobody's hero", duration: '4:05'},
       {title: 'Done for you', duration: '3:56'}

    ];
};

const selectedSongReduser = (selectedSong = null, action) => {
        if(action.type === 'SONG_SELECTED'){
            return  action.payload;
        }
        return selectedSong;
};

export default combineReducers({
    songs: songsReduser,
    selectedSong: selectedSongReduser
});