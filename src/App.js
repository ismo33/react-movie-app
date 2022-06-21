import { useState } from 'react';
import {Navbar,Nav,Button,Container,Form} from 'react-bootstrap';
import {Link,Routes,Route} from 'react-router-dom';
import './App.css'
import MovieList from './components/movieList/MovieList';
import Home from './components/home/Home';
import AddMovie from './components/addmovie/AddMovie';

function App() {
  const data = [
    {
      title: "Never Back Down",
      rate: 4,
      image:
        'https://m.media-amazon.com/images/M/MV5BMTkzNDg3MTIyMF5BMl5BanBnXkFtZTcwOTAwNDc1MQ@@._V1_FMjpg_UX1000_.jpg',
      desc: "Never Back Down is a 2008 American martial arts film directed by Jeff Wadlow and starring Sean Faris, Amber Heard, Cam Gigandet, and Djimon Hounsou. It tells the story of a frustrated and conflicted teenager who arrives at a new high school and discovers an underground fight club there.",
      year: "2008",
    },
    {
      title: "Titanic",
      rate: 5,
      image:
        "https://upload.wikimedia.org/wikipedia/en/1/18/Titanic_%281997_film%29_poster.png",
      desc: "The movie is about the 1912 sinking of the RMS Titanic. It stars Kate Winslet and Leonardo DiCaprio. The two play characters who are of different social classes. They fall in love after meeting aboard the ship, but it was not good for a rich girl to fall in love with a poor boy in 1912.",
      year: "1997",
    },
    {
      title: "Matrix",
      rate: 1,
      image:
        "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
      desc: "It depicts a dystopian future in which humanity is unknowingly trapped inside a simulated reality, the Matrix, which intelligent machines have created to distract humans while using their bodies as an energy source.",
      year: "1999",
    },
    {
      title: "Matrix",
      rate: 1,
      image:
        "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
      desc: "It depicts a dystopian future in which humanity is unknowingly trapped inside a simulated reality, the Matrix, which intelligent machines have created to distract humans while using their bodies as an energy source.",
      year: "1999",
    },
    {
      title: "Matrix",
      rate: 1,
      image:
        "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
      desc: "It depicts a dystopian future in which humanity is unknowingly trapped inside a simulated reality, the Matrix, which intelligent machines have created to distract humans while using their bodies as an energy source.",
      year: "1999",
    },
   
   
  ];
  const [movies,setMovie]=useState(data);
  const [searchMovie,setSearchMovie]=useState('');
  //fucntion to pass to the addMovie component
  const addNewMovie=(movie)=>{
    setMovie([...movies,movie]);
  }
  
  return (
    <>  
    <div>
      <Navbar bg="dark" variant="dark" fixed='top'>
        <Container className='container'>
          <Navbar.Brand>Movie plus+</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link className='links' as={Link} to={"/"} >Home</Nav.Link>
            <Nav.Link className='links' as={Link} to={"/movielist"} >Movies list</Nav.Link>
            <Nav.Link className='links' as={Link} to={"/addmovie"}>Add movie</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={(e)=>setSearchMovie(e.target.value)}
          
              
            />
            <Button variant="secondary">Search</Button>
           </Form>
        </Container>
      </Navbar>
     
    </div>
    
     <Routes>
        <Route path="movielist" element={<MovieList  movies={movies} searchMovie={searchMovie}/>}></Route>
        <Route path='/' element={<Home />}> </Route>
        <Route path='/addmovie' element={<AddMovie addNewMovie={addNewMovie}/>}></Route>
     </Routes>
   
    </>
  );
}

export default App;
