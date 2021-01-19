const initState = {
   popular: [],
   newGames: [],
   upcoming: [],
   searched: [],
};

const gamesReducer = (state = initState, action) => {
   switch (action.type) {
      case 'FETCH':
         return {
            ...state,
            popular: action.payload.popular,
            upcoming: action.payload.upcoming,
            newGames: action.payload.newGames,
         };
      case 'SEARCHING':
         return {
            ...state,
            searched: action.payload.searchGames,
         };
      default:
         return { ...state };
   }
};

export default gamesReducer;
