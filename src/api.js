//base URL
const base_url = 'https://api.rawg.io/api/';

//getting the month
const getCurrentMonth = () => {
   const month = new Date().getMonth() + 1;
   return month < 10 ? `0${month}` : month;
};

//getting the day
const getCurrentDate = () => {
   const date = new Date().getDate();
   return date < 10 ? `0${date}` : date;
};

//current date format
const currentDay = getCurrentDate();
const currentMonth = getCurrentMonth();
const currentYear = new Date().getFullYear();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;

//popular games
const popularGames = `games?dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
const upcomingGames = `games?dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
const newGames = `games?dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;

export const popularGamesUrl = () => `${base_url}${popularGames}`;
export const upcomingGamesUrl = () => `${base_url}${upcomingGames}`;
export const newGamesUrl = () => `${base_url}${newGames}`;

//GAME DEATAIL
export const gameDetailUrl = (id) => `${base_url}games/${id}`;
export const gameScreenShotlUrl = (id) => `${base_url}games/${id}/screenshots`;

//SEARCH GAME
export const searchGameUrl = (game) =>
   `${base_url}games?search=${game}&page_size=12`;
