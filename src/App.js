import React from "react";
import axios from "axios";
import Movie from "./Movie";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };
  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts.mx/api/v2/list_movies.json?sort_by=rating"
    );
    this.setState({
      isLoading: false,
      movies,
    });
  };
  componentDidMount() {
    this.getMovies();
  }
  render() {
    const { isLoading, movies } = this.state;
    return (
      <section>
        <div>
          {isLoading
            ? "Loading"
            : movies.map((movie) => {
                return (
                  <Movie
                    id={movie.id}
                    image={movie.medium_cover_image}
                    title={movie.title}
                    year={movie.year}
                    genres={movie.genres}
                    rating={movie.rating}
                    summary={movie.summary}
                    key={movie.id}
                  />
                );
              })}
        </div>
      </section>
    );
  }
}

export default App;
