import axios from 'axios';
import { gameDetailUrl, gameScreenShotlUrl } from '../api';

export const loadDetail = (id) => async (dispatch) => {
   dispatch({
      type: 'LOADING',
   });

   const detailData = await axios.get(gameDetailUrl(id));
   const detailSreenShotData = await axios.get(gameScreenShotlUrl(id));

   dispatch({
      type: 'GET_DETAIL',
      payload: {
         game: detailData.data,
         screen: detailSreenShotData.data.results,
      },
   });
};
