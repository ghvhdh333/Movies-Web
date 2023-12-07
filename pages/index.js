// 메인페이지('/')
import { useEffect, useState } from "react";
import Seo from "../components/Seo";

export default function Home() {
  const [movies, setMovies] = useState();
  useEffect(() => {
    (async () => {
      const { results } = await (
        await fetch(`/api/movies`)).json();
      setMovies(results);
      console.log(results)
    })();
  }, []);
  return (
    <div className="container">
      <Seo/>
      {!movies && <h2 className="loading">Loading...</h2>}
      {movies?.map((movie) => (
         <div className="movie" key={movie.id}>
         <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
         <h4>{movie.original_title}</h4>
       </div>
     ))}
      <style jsx>{`
        .container {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
          padding: 20px;
          gap: 20px;
        }
        .movie img {
          width: 250px;
          height: 350px;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
          cursor: pointer;
        }
        .movie:hover img {
          transform: scale(1.05) translateY(-10px);
        }
        .movie h4 {
          width: 250px;
          height: 22px;
          font-size: 18px;
          text-align: center;
          margin: 0;
          padding: 10px 0 20px 0;
          cursor: pointer;
        }
        .loading {
          display: flex;
          justify-content: center;
          align-items:center;
          margin:0;
          height:100vh;
          margin-top: -110px;
        }
      `}</style>
    </div>
  );
}