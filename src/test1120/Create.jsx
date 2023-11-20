import React from 'react';

const Create = (props) => {
    const {onInputChange, newMovie, onAddMovie} = props;

    return (
        <div>
            <h3>Create Movie</h3>
            <form action="">
                <div>
                    <input 
                      type="text"
                      name='id'
                      value={newMovie.id}
                      onChange={onInputChange}
                      placeholder='Input movie id'
                    />
                </div>
                <div>
                    <input 
                      type="text"
                      name='title'
                      value={newMovie.title}
                      onChange={onInputChange}
                      placeholder='Input movie title'
                    />
                </div>
                <div>
                    <input 
                      type="text"
                      name='genre'
                      value={newMovie.genre}
                      onChange={onInputChange}
                      placeholder='Input movie genre'
                    />
                </div>
                <div>
                    <label>출시일 : </label>
                    <input 
                      type="date"
                      name='release_date'    
                      value={newMovie.release_date}
                      onChange={onInputChange}
                      
                    />
                </div>
            </form>
            <button onClick={onAddMovie}>Add Movie</button>
        </div>
    );
};

export default Create;