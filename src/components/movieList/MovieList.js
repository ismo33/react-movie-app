import './movieList.css'
import MovieCard from '../moviecard/MovieCard';


const MovieList = ({movies,searchMovie}) => {
   
     const sortedMovies=movies.filter((val)=>{
         return (val.title.toLowerCase().includes(searchMovie.toLowerCase()))
        })
    return (
        <div className="movielist">
         {sortedMovies.map((movie,i) => {
            return (
                <MovieCard key={i}
                title={movie.title}
                desc={movie.desc}
                rate={movie.rate}
                image={movie.image}
                year={movie.year}/>
            )
         })}
        </div>
    );
};

export default MovieList;