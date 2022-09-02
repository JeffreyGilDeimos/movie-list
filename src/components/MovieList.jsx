import React from "react";
import MovieBody from "./MovieBody";
import MovieHeader from "./MovieHeader";

export default function MovieList() {
  return (
    <div className="todo-body">
      <h1 className="text-warning fw-bold text-center">BLOCKBUSTER MOVIES</h1>
      <p className="fs-4 text-center">New Movies for 2022</p>
      <br />
      <hr />
      <MovieHeader />
      <br />
      <hr />
      <br />
      <div className="heading">
        <ul>
          <li>MOVIE NAME</li>
          <li>CATEGORY</li>
          <li>ACTIONS</li>
        </ul>
      </div>
      <MovieBody />
    </div>
  );
}
