const array = ['Giovanni','Giacomo','Aldo'];

const arrayOrdinato = array.sort( (a,b) => a.length-b.length);
arrayOrdinato.forEach(e => console.log(e));

const lunghTot = array.reduce( (p,c,i) => p+=c.length,0);
console.log(lunghTot);