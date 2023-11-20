import React,{useState} from 'react';
import Create from './test1120/Create';
import List from './test1120/List';
import './App2.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';


function App2() {
  const [movie, setMovie] = useState([
    {id: 1, title:"Movie1", genre: "Drama", release_date: "2022-01-01"},
    {id: 2, title:"Movie2", genre: "Action", release_date: "2022-02-01"},
    {id: 3, title:"Movie3", genre: "Comedy", release_date: "2022-03-01"},
  ])

  const [newMovie, setNewMovie] = useState({
    id: '', 
    title:'', 
    genre: '', 
    release_date: '',
  })

 
  const handleDeleteMovie = (id) => {
    const updateMovieList = movie.filter(m => m.id !== id);
    setMovie(updateMovieList);
  }

  const handleAddMovie = () => {
    //console.log(newMovie.id)
    const isvalueCheck1 = movie.some((r) => newMovie.id == ""); 
    const isvalueCheck2 = movie.some((r) => newMovie.title == ""); 
    const isvalueCheck3 = movie.some((r) => newMovie.genre == ""); 
    const isvalueCheck4 = movie.some((r) => newMovie.release_date == ""); 
    //console.log(isvalueCheck1 + " " + isvalueCheck2 + " " + isvalueCheck3 + " " + isvalueCheck4)
    if (isvalueCheck1 || isvalueCheck2 || isvalueCheck3 || isvalueCheck4){
        alert('모든 값이 입력되어야 합니다')
        return;
    }

    const isCheckId = movie.some((r) => String(r.id) === newMovie.id); 
    if (isCheckId){
      alert('이미 존재하는 아이디입니다')
      setNewMovie({...newMovie, 'id' : ''})
      return;
    }

    setMovie([
      ...movie,
        newMovie,
    ])
    setNewMovie({
      id: '', 
      title:'', 
      genre: '', 
      release_date: '',
    })
  }

  const handleInputChange = (ev) => {
    const { value, name } = ev.target;

    setNewMovie({
      ...newMovie,
      [name] : value,
  })
}
  


  return (
    <Router>
      <div className="App2">
      
        <nav>
          <ul>
              <li>
                <Link to='/'> List</Link>
              </li>
              <li>
              <Link to='/create'> Add New Movie</Link>
              </li>
          </ul>
        </nav>

        <Routes>
          <Route path='/' element={<List movie={movie} onDeleteMovie={handleDeleteMovie}/>}/>
          <Route path='/create' 
          element={<Create newMovie={newMovie} 
                                onInputChange={handleInputChange} 
                                onAddMovie={handleAddMovie}/>}/>
        </Routes>
      </div>
    </Router>
     
  );
}

export default App2;
