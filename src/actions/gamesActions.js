import axios from 'axios';
import { popularGamesUrl, upcomingGamesUrl, newGamesUrl } from '../api';

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
