console.log("Let's get this party started!");
const API_KEY = "a4spUafLfMvXRhFWpwTlHP6sGHpLQJwr";


function handleSearch() {
  const searchTerm = $(input).val();



}


async function getGif(searchTerm) {

  const parameters = new URLSearchParams({
    api_key: API_KEY,
    q: searchTerm, limit: 1
  });
  const response = await fetch(`api.giphy.com/v1/gifs/search?${parameters}`);
  const embedURL = await response.json().data.embed_url;

  //TEST
  return embedURL;

}


//json object
//.data
//.embed_url
