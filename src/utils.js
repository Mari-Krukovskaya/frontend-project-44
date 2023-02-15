
export default (max = 100, min = 0) => Math.floor(Math.random() * (max - min + 1) + min);
// export default(min = 0, max = 100) => {
//  const minRandom = Math.ceil(min);
//  const maxRandom = Math.floor(max);
//   return Math.floor(Math.random() * (maxRandom - minRandom + 1)) + minRandom; //Максимум и минимум включаются
//}