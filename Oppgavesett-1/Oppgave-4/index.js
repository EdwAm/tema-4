
const musikere = [
    {navn: "Annifrid", rating: 6},
    {navn: "Agnethe", rating: 3},
    {navn: "Benny", rating: 5},
    {navn: "Bjørn", rating: 2}
  ]

const hoyrating = musikere.filter( rating => rating.rating > 4);

console.log(hoyrating);
