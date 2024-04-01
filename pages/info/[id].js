import { useRouter } from "next/router";
import Seo from "@/components/Seo";
import { useState, useEffect } from "react";

export default function Info() {
  const router = useRouter();
  const { id } = router.query;

  const [movie, setMovie] = useState([]);

  useEffect(() => {
    if (id) {
      (async () => {
        const data = await (await fetch(`/api/movie/info/${id}`)).json();
        setMovie(data);
      })();
    }
  }, [id]);

  return (
    <div className="container">
      <Seo />
      {movie.length !== 0 && id ? (
        <>
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
          <section className="movie_detail">
            <div className="detail_items">
              <div className="detail_box">Title</div>
              <span className="detail_text">{movie.title}</span>
            </div>
            <div className="detail_items">
              <div className="detail_box">Movie ID</div>
              <span className="detail_text">{movie.id}</span>
            </div>
            <div className="detail_items">
              <div className="detail_box">Language</div>
              <span className="detail_text">{movie.original_language}</span>
            </div>
            <div className="detail_items">
              <div className="detail_box">Release Date</div>
              <span className="detail_text">{movie.release_date}</span>
            </div>
            <div className="detail_items">
              <div className="detail_box">Runtime</div>
              <span className="detail_text">{movie.runtime} min</span>
            </div>
            <div className="detail_items">
              <div className="detail_box">Vote Average</div>
              <span className="detail_text vote_average">
                {movie.vote_average}
              </span>
              <span> / 10</span>
            </div>
            <div className="detail_items">
              <div className="detail_box">Vote Count</div>
              <span className="detail_text">{movie.vote_count} 🙋‍♂️</span>
            </div>
            <div>
              <div className="detail_box">Overview</div>
              <div className="detail_overview">{movie.overview}</div>
            </div>
          </section>
        </>
      ) : (
        <h2 className="loading">Loading...</h2>
      )}
      <style jsx>{`
        .container {
          height: 89vh;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          align-items: center;
          padding: 20px;
          gap: 50px;
        }

        img {
          width: 500px;
          border-radius: 12px;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }

        .detail_items {
          display: flex;
          justify-content: start;
          align-items: center;
        }

        .movie_detail {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .detail_box {
          border-radius: 12px;
          padding: 10px 20px 10px 20px;
          background-color: gray;
          color: white;

          font-size: 20px;
          font-weight: 600;
          text-align: center;

          margin-right: 10px;
          width: 150px;
        }

        .detail_text {
          font-size: 20px;
          font-weight: 600;
        }

        .vote_average {
          padding-right: 5px;
        }

        .detail_overview {
          font-size: 20px;
          font-weight: 600;
          padding: 10px;
          flex-wrap: wrap;
          width: 500px;
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
