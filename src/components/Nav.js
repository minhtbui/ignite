import React from 'react';
//Styling and Animation
import styled from 'styled-components';
import { motion } from 'framer-motion';
//Redux
import { useDispatch } from 'react-redux';
import { searchGames } from '../actions/gamesActions';

const Nav = () => {
   const dispatch = useDispatch();

   const searchingHandler = (e) => {
      e.preventDefault();
      let keyword = e.target.value;

      dispatch(searchGames(keyword));
   };
   return (
      <StyledNav>
         <div className='searchBar'>
            <input type='text' name='' id='' onChange={searchingHandler} />
         </div>
      </StyledNav>
   );
};

const StyledNav = styled(motion.nav)`
   text-align: center;
   padding: 4em 0;
   input {
      width: 15%;
      font-size: 18px;
      font-family: 'Source Code Pro', monospace;
      padding: 0.5rem 1rem;
      outline: none;
      border-color: rgba(20, 20, 20, 0.5);
      border-radius: 15px;
      box-shadow: 0 0 30px rgba(0, 0, 0, 0.2);
   }
`;
export default Nav;
