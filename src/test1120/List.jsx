import React, {useState} from 'react';


const List = (props) => {
    const { movie, onDeleteMovie } = props; //app에 있는 reply 가져오기
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Genre</th>
                        <th>Release Date</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {movie.map((r)=> (
                        <tr key={r.id}>
                            <td>{r.id}</td>
                            <td>{r.title}</td>
                            <td>{r.genre}</td>
                            <td>{r.release_date}</td>
                            <td>
                                <button onClick={(ev) => onDeleteMovie(r.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default List;