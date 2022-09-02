import React, { useState, useRef } from "react";
import { bindActionCreators } from "redux";
import { useDispatch } from "react-redux";
import * as actionMovie from "../redux/actions/actionMovie";

export default function MovieHeader() {
  const [inputMovie, setInputMovie] = useState("");
  const [inputCategory, setInputCategory] = useState("");
  const inputRefMovie = useRef(null);
  const inputRefCategory = useRef(null);
  const { addMovie } = bindActionCreators(actionMovie, useDispatch());

  // useEffect(() => {
  //   inputRef.current.focus();
  // });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputMovie) {
      inputRefMovie.current.focus();
    } else if (!inputCategory) {
      inputRefCategory.current.focus();
    } else {
      addMovie({
        id: Math.floor(Math.random() * 100000),
        text: inputMovie,
        category: inputCategory,
      });
      setInputMovie("");
      setInputCategory("");
    }
  };

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <div className="d-flex align-items-center justify-content-center">
        <input
          id="new-task-input"
          value={inputMovie}
          ref={inputRefMovie}
          onChange={(e) => setInputMovie(e.target.value)}
          name="text"
          className="mt-3"
          style={{ width: "500px" }}
          placeholder="Movie name"
        />
        <input
          id="new-task-input"
          value={inputCategory}
          ref={inputRefCategory}
          onChange={(e) => setInputCategory(e.target.value)}
          name="text"
          className="mt-3"
          style={{ width: "400px" }}
          placeholder="Movie category"
        />
        <button
          id="new-task-submit"
          className="mt-3 me-0"
          onClick={handleSubmit}
        >
          <p className="text-light m-0">Add Movie</p>
        </button>
      </div>
    </form>
  );
}
