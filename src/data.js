function importAll(r) {
  return r.keys().map(r);
}
const images = importAll(require.context('./content/images/plants/', false, /\.(png|jpe?g|svg)$/));
console.log(images);

export const plants = [ 
  {
  id: 1,
  img: images[4].default,
  name: 'Suculenta',
  desc: 'Las plantas suculentas son aquellas en las que algún órgano está especializado en el almacenamiento de agua en cantidades mayores que las plantas sin esta adaptación.',
  price: '178.53'
},
{
  id: 2,
  img: images[0].default,
  name: 'Bonsai',
  desc: 'Es un bonsai.',
  price: '433.29'
},
{
  id: 3,
  img: images[1].default,
  name: 'Dracaena',
  desc: 'Es una dracaena.',
  price: '433.29'
},
{
  id: 4,
  img: images[2].default,
  name: 'Ficus',
  desc: 'Es un ficus.',
  price: '433.29'
},
{
  id: 5,
  img: images[3].default,
  name: 'Peperomia',
  desc: 'Es una peperomia.',
  price: '433.29'
},
{
  id: 6,
  img: images[5].default,
  name: 'Yucca',
  desc: 'Es una yucca.',
  price: '433.29'
}
];

export const loginInfo = [
  {
    id: 1,
    username: "Pablo",
    password: "123456",
  }
];
