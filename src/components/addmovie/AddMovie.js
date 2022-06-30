import { useState } from 'react';
import { Form ,Button} from 'react-bootstrap';
import './addmovie.css'


const AddMovie = ({addNewMovie}) => {
    const [title,setTitle]=useState('');
    const [desc,setDesc]=useState('');
    const [year,setYear]=useState('');
    const [image,setImage]=useState('');
    const [rate,setRate]=useState('');
    const [trailer,setTrailer]=useState('');

    const handleNewMovie=(e) =>{
        e.preventDefault();
        const movie={title,desc,year,image,trailer,rate};
        if(
            title==='' ||
            desc==='' ||
            year==='' ||
            image==='' ||
            trailer===''
        ) 
        return alert("Missing fields");

        if(rate<0) 
        return alert("rate must be positif")
        addNewMovie(movie);
        setTitle('');
        setDesc('');
        setYear('');
        setImage('');
        setRate('');
        alert("succes")
    }

    return (
        <div className="addmovie">
            <h3>Add a movie</h3>
            <Form className='form' onSubmit={handleNewMovie} >
                <Form.Group>
                    <Form.Label>Title</Form.Label>
                    <Form.Control 
                     placeholder="Movie name"
                     value={title}
                     onChange={(e) => setTitle(e.target.value)} 
                     />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Description</Form.Label>
                    <Form.Control 
                     placeholder="Description"
                     value={desc}
                     onChange={(e) => setDesc(e.target.value)} 
                     />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Year</Form.Label>
                    <Form.Control  
                     placeholder="Release year"
                     value={year}
                     onChange={(e) => setYear(e.target.value)} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Poster</Form.Label>
                    <Form.Control  
                    placeholder="Copy poster link"
                    value={image}
                     onChange={(e) => setImage(e.target.value)} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Trailer</Form.Label>
                    <Form.Control  
                     placeholder="Trailer link "
                     value={trailer}
                     onChange={(e) => setTrailer(e.target.value)} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Rate</Form.Label>
                  
                    <Form.Control 
                    type='number'
                    max={5}
                    value={rate}
                     onChange={(e) => setRate(e.target.value)}/>
                </Form.Group>
                <Button type="submit" size='lg' variant='danger' className='button'>Submit</Button>
            </Form>
            
        </div>
    );
};

export default AddMovie;



<iframe width="560" height="315" src="https://www.youtube.com/embed/2tc-RPjZRm8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>