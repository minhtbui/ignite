// media resize

export const resize = (imgUrl, size) => {
   const img = imgUrl.match(/media\/screenshots/)
      ? imgUrl.replace(
           '/media/screenshots',
           `/media/resize/${size}/-/screenshots`,
        )
      : imgUrl.replace('/media/games', `/media/resize/${size}/-/games`);

   return img;
};
