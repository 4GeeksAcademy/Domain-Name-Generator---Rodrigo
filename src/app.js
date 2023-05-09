
  const DomainGenerator = () =>{
  let pronoun = ['The','Your','Our','My'];
  let adj = ['Great','Big','Small','Ignorant' ];
  let noun = ['Poet','Racoon','Hamster','Grandma','Uncle','Rooster'];
  let domain = ['.com','.net','.us','.io']

  return (
    pronoun[Math.floor(Math.random() * pronoun.length)] +
    adj[Math.floor(Math.random() * adj.length)] +
    noun[Math.floor(Math.random() * noun.length)] +
    domain[Math.floor(Math.random() * domain.length)]
  );
}
console.log(DomainGenerator());
