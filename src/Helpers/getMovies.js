
const urli = "https://api.themoviedb.org/3/search/person?api_key=af9f7a390eabce73003c2deb152e8310&query="

const GetMovies = async(actorName) => {
  try{
      const resp = await fetch(urli+actorName);
      const {results} = await resp.json();

      return results;

  }catch(error){
      console.error('desde getPeliculas:',error)
  }
}

export default GetMovies