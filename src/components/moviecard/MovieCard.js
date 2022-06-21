import './moviecard.css';
import {Card} from 'react-bootstrap';
import ReactStars from 'react-stars';
const MovieCard = ({title,desc,rate,image,year}) => {
    return (
        <div className='movie-card' >
            <Card  className='row'>
              <Card.Img className='image'  src={image}  alt="movie"/>
              <div className='info'>
              <h6>{title}</h6>
              <ReactStars
               value={rate}
               count={5}
               size={20}
               half={true}/>
              <div className='description'>
                <h6>Realease : {year}</h6>
                <h2>Overview :</h2>
                <p>{desc}</p>
           </div>
              </div>  
           </Card>
           
            
        </div>
    );
};

export default MovieCard;