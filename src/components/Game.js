import React from 'react';
import { resize } from '../util';
//Styling and Animation
import styled from 'styled-components';
import { motion } from 'framer-motion';
//Redux
import { useDispatch } from 'react-redux';
import { loadDetail } from '../actions/detailAction';
import { Link } from 'react-router-dom';

const Game = ({ id, name, released, img }) => {
   const stringID = id.toString();

   //Load detail
   const dispatch = useDispatch();
   const loadDetailHandler = () => {
      dispatch(loadDetail(id));
      document.body.style.overflow = 'hidden';
   };

   return (
      <StyledGame layoutId={stringID} onClick={loadDetailHandler}>
         <Link to={`/game/${id}`}>
            <motion.h3 layoutId={`title ${stringID}`}>{name}</motion.h3>
            <p>Realse: {released}</p>
            <motion.img
               layoutId={`img ${stringID}`}
               src={resize(img, 640)}
               alt={name}
            />
         </Link>
      </StyledGame>
   );
};

const StyledGame = styled(motion.div)`
   min-height: 30vh;
   box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.1);
   text-align: center;
   border-radius: 1rem;
   cursor: pointer;
   overflow: hidden;
   a {
      display: flex;
      flex-direction: column;
      height: 100%;
   }
   p {
      margin-top: auto;
   }
   img {
      width: 100%;
      height: 25vh;
      object-fit: cover;
   }
`;
export default Game;
