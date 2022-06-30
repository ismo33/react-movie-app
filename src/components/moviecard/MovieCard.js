import './moviecard.css';
import {Card,Button} from 'react-bootstrap';
import ReactStars from 'react-stars';
import { Link} from 'react-router-dom';

// import { Link,Route,Routes} from 'react-router-dom';
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
                <Button variant='light' className='btn'>
                    <Link to={`/moviedetails/${title}`} className="details">Show details</Link>
                </Button>
                
                    
               
           </div>
              </div>  
           </Card>
           
            
        </div>
    );
};

export default MovieCard;