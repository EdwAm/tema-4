const tallene = [24,55,67,84,26,42,53,23,1,88];

const storeTall = tallene.filter(tall => tall > 80);

const smaTall = tallene.filter(tall => tall < 20);

const midtTall = tallene.filter(tall => tall > 20 && tall < 80);

console.log(storeTall);
console.log(smaTall);
console.log("Disse tallene er mellom 20 og 80: " + midtTall);