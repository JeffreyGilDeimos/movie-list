import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionMovie from "../redux/actions/actionMovie";
import * as actionUpdate from "../redux/actions/actionUpdate";

export default function MovieBody() {
  const Movies = useSelector((state) => state.Movies);
  const update = useSelector((state) => state.update);
  const [editInputMovie, setEditInputMovie] = useState(
    update ? update.text : ""
  );
  const [editInputCategory, setEditInputCategory] = useState(
    update ? update.category : ""
  );

  const { removeMovie } = bindActionCreators(actionMovie, useDispatch());
  const { setUpdateMovie, saveUpdateMovie } = bindActionCreators(
    actionUpdate,
    useDispatch()
  );

  const setUpdate = (Movie) => {
    setUpdateMovie(Movie);
    setEditInputMovie(update.text);
    setEditInputCategory(update.category);
  };

  const saveUpdate = (id) => {
    const updatedMovie = {
      id,
      text: editInputMovie,
      category: editInputCategory,
    };
    console.log(id, editInputMovie, editInputCategory);
    saveUpdateMovie(updatedMovie);
  };

  return Movies.map((Movie, index) => (
    <div id="tasks" key={index}>
      <div className="task">
        <div className="content">
          <input
            className="text"
            value={update.id !== Movie.id ? Movie.text : editInputMovie}
            onChange={(e) => setEditInputMovie(e.target.value)}
            readOnly={update.id !== Movie.id}
          />
        </div>
        <div className="content">
          <input
            className="text"
            value={update.id !== Movie.id ? Movie.category : editInputCategory}
            onChange={(e) => setEditInputCategory(e.target.value)}
            readOnly={update.id !== Movie.id}
          />
        </div>
        <div className="actions">
          {update.id !== Movie.id ? (
            <button className="edit" onClick={() => setUpdate(Movie)}>
              <i className="bi bi-pencil-square fs-5 mx-3"></i>
            </button>
          ) : (
            <button className="edit" onClick={() => saveUpdate(Movie.id)}>
              <i className="bi bi-save fs-5 mx-5 text-warning"></i>
            </button>
          )}
          {update.id !== Movie.id && (
            <button className="delete" onClick={() => removeMovie(Movie.id)}>
              <i className="bi bi-trash3-fill fs-5 mx-3"></i>
            </button>
          )}
        </div>
      </div>
    </div>
  ));
}
