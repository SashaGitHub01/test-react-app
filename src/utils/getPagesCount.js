const getPagesCount = (total, limit) => {
   return Math.ceil(total / limit);
}

export default getPagesCount;