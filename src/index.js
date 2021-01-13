import React from 'react'
import ReactDom from 'react-dom'

function PlantList(){
  return(
    <section>
      <Plant/>
    </section>
  );
}

const Plant = () => {
  return( 
  <article>
    <Image/>
    <h4>This is a plant</h4>
    <p>descripcion</p>
  </article> 
  );
}

const Image = () => (<img height = "200" src="https://i.pinimg.com/736x/ca/b4/73/cab473942dab3958ea156067e072ca28.jpg" alt=""/> 
);


ReactDom.render(<PlantList/>, document.getElementById('root'));
