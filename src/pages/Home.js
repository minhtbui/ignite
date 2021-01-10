import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadGames } from '../actions/gamesActions';
import Game from '../components/Game';
import GameDetail from '../components/GameDetail';
import { useLocation, useParams } from 'react-router-dom';

//Styling and Animation
import styled from 'styled-components';
import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion';

const Home = () => {
   const { id } = useParams();

   // FETCH DATA
   const dispatch = useDispatch();
   useEffect(() => {
      dispatch(loadGames());
      // if (!id) document.body.style.overflow = 'auto';
      // else document.body.style.overflow = 'hidden';
   }, [dispatch]);

   // GET DATA
   const { popular, upcoming, newGames } = useSelector((state) => state.games);

   return (
      <GameList>
         <AnimateSharedLayout type={'crossfade'}>
            <AnimatePresence>
               {id && <GameDetail layoutId={id} />}
            </AnimatePresence>
            <h1>Upcoming Games</h1>
            <Games>
               {upcoming.map((game) => (
                  <Game
                     key={game.id}
                     id={game.id}
                     name={game.name}
                     released={game.released}
                     img={game.background_image}
                  />
               ))}
            </Games>

            <h1>Popular Games</h1>
            <Games>
               {popular.map((game) => (
                  <Game
                     key={game.id}
                     id={game.id}
                     name={game.name}
                     released={game.released}
                     img={game.background_image}
                  />
               ))}
            </Games>

            <h1>New Games</h1>
            <Games>
               {newGames.map((game) => (
                  <Game
                     key={game.id}
                     id={game.id}
                     name={game.name}
                     released={game.released}
                     img={game.background_image}
                  />
               ))}
            </Games>
         </AnimateSharedLayout>
      </GameList>
   );
};

const GameList = styled(motion.div)`
   padding: 0 5rem;
   h1 {
   }
`;

const Games = styled(motion.div)`
   min-height: 80vh;
   display: grid;
   grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
   grid-column-gap: 3rem;
   grid-row-gap: 5rem;
`;
export default Home;
