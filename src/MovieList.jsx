import React, { useEffect, useState } from "react";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  // 초기 값은 빈 배열로 선언

  useEffect(() => {
    // 비동기 함수 fetch를 사용할 때는 async를 사용
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );

        if (response.ok) {
          const data = await response.json();
          setMovies(data);
        } else {
          throw new Error("Failed to fetch movies");
        }
      } catch (error) {
        console.error("영화 목록 가져오기 실패:", error.message);
        // error의 message를 확인한다 = error.message
      }
    };

    // fetchMovies를 가져오는 함수 실행!
    fetchMovies();
  }, []);

  return (
    <div>
      <h1 className="text-3xl">Movie List</h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
          // key 값으로 movie 배열의 id를
          // 출력되는 내용은 movie 배열의 title
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
