import React from 'react';
import Insects from '../images/insects.png';
import Plants from '../images/plants.png';
import Calocitta from '../images/Calocitta.jpg';
import { Link } from 'react-router-dom';

class NotebooksPage extends React.Component {
    render() {
        return (
            <div className='NotebooksBody'>
            <h1 className='CollectionText'>
             Selecciona un cuaderno
            </h1>
        <body className="NotebooksContainer">
           
           <Link to='/' ><button className='Home'>Inicio</button></Link> 

           <Link to='/pages/collectionPage1' className='Notebooks'><img alt='1' className='Collections' width='200' src={Insects}/><h3 className="notebookTitle">Invertebrados</h3></Link>
           
           <Link to='/pages/collectionPage2' className='Notebooks'><img alt='2' className='Collections' width='200' src={Plants}/><h3 className="notebookTitle">Plantas y hongos</h3></Link>
          
           <Link to='/pages/collectionPage3' className='Notebooks'><img alt='3' className='Collections' width='200' src={Calocitta}/><h3 className="notebookTitle">Vertebrados</h3></Link>
       
        </body>
        </div>
        );
    }
}
export default NotebooksPage;