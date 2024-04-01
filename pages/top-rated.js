import Link from "next/link";
import Seo from "../components/Seo";
import axios from "axios";
import { useState, useEffect } from "react";

export default function TopRated() {
  const [topRatedData, setTopRatedData] = useState([]);

  const getTopRatedData = async () => {
    try {
      // 서버 api 호출
      const response = await axios.get(`/api/movies/top-rated`, {
        headers: {
          "Content-Type": "application/json",
          "ngrok-skip-browser-warning": "69420",
        },
      });
      console.log(response.data.results);
      setTopRatedData(response.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTopRatedData();
  }, []);

  return (
    <div className="container">
      <Seo />
      {topRatedData?.map((movie) => (
        <Link href={`/info/${movie.id}`} key={movie.id}>
          <div className="movie">
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
            <h4>{movie.original_title}</h4>
          </div>
        </Link>
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
          align-items: center;
          margin: 0;
          height: 100vh;
          margin-top: -110px;
        }
      `}</style>
    </div>
  );
}

// export async function getServerSideProps() {
//   const { results } = await (await fetch(`/api/movies/top-rated`)).json();
//   return {
//     props: {
//       results,
//     },
//   };
// }
