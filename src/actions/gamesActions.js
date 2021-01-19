import axios from 'axios';
import {
   popularGamesUrl,
   upcomingGamesUrl,
   newGamesUrl,
   searchGameUrl,
} from '../api';

//Action Creator

export const loadGames = () => async (dispatch) => {
   // fetch axios
   const popularData = await axios.get(popularGamesUrl());
   const upcomingData = await axios.get(upcomingGamesUrl());
   const newData = await axios.get(newGamesUrl());

   dispatch({
      type: 'FETCH',
      payload: {
         popular: popularData.data.results,
         upcoming: upcomingData.data.results,
         newGames: newData.data.results,
      },
   });
};

export const searchGames = (game) => async (dispatch) => {
   const searchGames = await axios.get(searchGameUrl(game));

   dispatch({
      type: 'SEARCHING',
      payload: {
         searchGames: game ? searchGames?.data.results : [],
      },
   });
};
