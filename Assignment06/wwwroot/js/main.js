document.addEventListener("DOMContentLoaded", () => {
    const movieList = document.getElementById("Movielist");
    const addMovie = document.getElementById("addMovie");
    function DisplayMovies() {
        fetch("http://localhost:53358/api/Movies")
            .then(response => {
                if (!response.ok) {
                    throw new Error(`http error status ${response.status}`);
                }
                return response.json();
            })
            .then(movies => {
                movieList.innerHTML = "";
                movies.forEach(movie => {
                    const listitem = document.createElement("li");
                    listitem.textContent = `Id:${movie.movie_Id}, 
                    Movie Name : ${movie.movie_Name}, 
                    Star Cast: ${movie.starCast},
                    Producer: ${movie.producer},
                    Director: ${movie.director},
                    Release Date: ${movie.releaseDate}`;
                    movieList.appendChild(listitem);
                })
            })
            .catch(error => {
                console.error("fetch error :", error);
                movieList.innerHTML = "Error fetch Tasks";
            })
    }
    addMovie.addEventListener("submit", (e) => {
        e.preventDefault();
        const movie_Name = document.getElementById("movie_Name").value;
        const starCast = document.getElementById("starCast").value;
        const director = document.getElementById("director").value;
        const producer = document.getElementById("producer").value;
        const releaseDate = document.getElementById("releaseDate").value;
        
        fetch("http://localhost:53358/api/Movies", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ movie_Name, starCast, director, producer, releaseDate })
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`http error status ${response.status}`);
                }
                return response.json();
            })
            .then(() => {
                document.getElementById("movie_Name").value = "";
                document.getElementById("starCast").value = "";
                document.getElementById("director").value = "";
                document.getElementById("producer").value = "";
                document.getElementById("releaseDate").value = "";
               

                DisplayMovies();
            })
            .catch(error => {
                console.error("fetch error :", error);
                movieList.innerHTML = "Error Post Tasks";
            })
    })
    DisplayMovies();
});