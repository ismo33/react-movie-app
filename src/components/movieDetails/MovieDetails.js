import './movieDetails.css'
import { useParams,useNavigate } from 'react-router-dom';
import { useState , useEffect } from 'react';
import ReactStars from 'react-stars';
import { Container } from 'react-bootstrap';



const MovieDetails = ({movies}) => {
    const navigate=useNavigate();
    const {title}=useParams();
    const [movie,setMovie]=useState({});

   const findMovie=() => {
    setMovie(movies.find((el)=> el.title===title))
   }

    useEffect(()=>{
        findMovie();
    },[])
    
    return(
        <div className='wrapper d-flex'>
            <Container className='mt-5 pt-4 mw-50 '>
                <Container className='border border-2 rounded border-dark w-100 m-0 p-0'>
                    <img className='photo rounded-top m-0 p-0' src={movie.image} alt='movie'/>
                    <h1 className='ps-3'>{movie.title}</h1>
                    <h6 className=' ps-3 opacity-75 fst-italic'>{movie.year}</h6>
                    <p className=' px-3'>{movie.desc}</p>
                    <ReactStars className='mb-2 ps-3'
                        value={movie.rate}
                        count={5}
                        size={35}
                        edit={false}/>
                </Container>
            </Container>
            <div className='m-5 p-5 me-2 d-flex flex-column justify-content-center'>
                <h2 className='text-center mb-4'> Trailer</h2>
                <iframe 
                    width="560" 
                    height="315" 
                    src={movie.trailer}
                    title="YouTube video player" 
                    frameborder="0" 
                    allowfullscreen></iframe>
                    <button 
                    className='btn btn-lg w-50 btn-info mt-5 '
                    onClick={()=>navigate('/')}> Home  </button>
            </div>
            
        </div>
    )
}

export default MovieDetails;