import React from 'react'
import ReactDom from 'react-dom'

//CSS
import './index.css'

//Setup vars

const plants = [
{
  img: "https://i.pinimg.com/736x/ca/b4/73/cab473942dab3958ea156067e072ca28.jpg",
  name: 'Suculenta',
  desc: 'Las plantas suculentas son aquellas en las que algún órgano está especializado en el almacenamiento de agua en cantidades mayores que las plantas sin esta adaptación.',
  price: '178.53'
},

{
  img: "https://www.bonsaiempire.es/great-bonsai-album/acer-bonsai-pall.jpg",
  name: 'Bonsai',
  desc: 'Es un bonsai.',
  price: '433.29'
},
];

function PlantList(){
  return(
    <section className='plantList'>
      {plants.map((plant)=>{
        return (<Plant plant = {plant}></Plant>);
      })}
    </section>
  );
}

const Plant = (props) => {
  const {img, name, desc, price} = props.plant;
  return( 
  <article className = "plant">
    <img height = "200" src={img} alt=""/>
    <h4>{name}</h4>
    <p>{desc}</p>
    <p>{price}</p>
  </article> 
  );
}

ReactDom.render(<PlantList/>, document.getElementById('root'));
