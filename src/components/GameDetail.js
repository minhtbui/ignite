import React from 'react';
import { useHistory } from 'react-router-dom';
import { resize } from '../util';
//Styling and Animation
import styled from 'styled-components';
import { motion } from 'framer-motion';
//Redux
import { useSelector } from 'react-redux';

const GameDetail = ({ layoutId }) => {
   //Data
   const { game, screen, isLoading } = useSelector((state) => state.detail);

   //Exit detail
   const history = useHistory();
   const exitDetailHandler = (e) => {
      const el = e.target;

      if (el.classList.contains('shadow')) {
         document.body.style.overflow = 'auto';
         history.push('/');
      }
   };

   return (
      !isLoading && (
         <CardShadow className='shadow' onClick={exitDetailHandler}>
            <Detail layoutId={layoutId} variants={variant}>
               <Stats>
                  <div className='rating'>
                     <motion.h3
                        layoutId={`title ${layoutId}`}
                        variants={variant}>
                        {game.name}
                     </motion.h3>
                     <p>Rating: {game.rating}</p>
                  </div>
                  <Info>
                     <h3>Platform</h3>
                     <Platforms>
                        {game.platforms.map((data) => (
                           <h3 key={data.platform.id}>{data.platform.name}</h3>
                        ))}
                     </Platforms>
                  </Info>
               </Stats>
               <Media>
                  <motion.img
                     layoutId={`img ${layoutId}`}
                     variants={variant}
                     src={resize(game.background_image, 1280)}
                     alt=''
                  />
               </Media>
               <Desc>
                  <p>{game.description_raw}</p>
               </Desc>
               <div className='gallery'>
                  {screen.map((data) => (
                     <img
                        src={resize(data.image, 1280)}
                        key={data.id}
                        alt={game.name}
                     />
                  ))}
               </div>
            </Detail>
         </CardShadow>
      )
   );
};

const CardShadow = styled(motion.div)`
   width: 100%;
   min-height: 100vh;
   overflow-y: scroll;
   background: rgba(0, 0, 0, 0.5);
   position: fixed;
   top: 0;
   left: 0;
   z-index: 999;
   &::-webkit-scrollbar {
      width: 0.5rem;
   }
   &::-webkit-scrollbar-thumb {
      background-color: #696969;
   }
   &::-webkit-scrollbar-track {
      background-color: white;
   }
`;
const Detail = styled(motion.div)`
   width: 80%;
   border-radius: 1rem;
   padding: 2rem 5rem;
   background: white;
   position: absolute;
   left: 10%;
   color: black;
   img {
      width: 100%;
   }
`;

const Stats = styled(motion.div)`
   display: flex;
   align-items: center;
   justify-content: space-between;
`;

const Info = styled(motion.div)`
   text-align: center;
`;

const Platforms = styled(motion.div)`
   display: flex;
   justify-content: space-evenly;
   img {
      margin-left: 3rem;
   }
`;

const Media = styled(motion.div)`
   margin-top: 5rem;
   img {
      width: 100%;
      object-fit: cover;
   }
`;

const Desc = styled(motion.div)`
   padding: 5rem 0;
`;

const variant = {
   transition: {
      duration: 0.7,
   },
};
export default GameDetail;
