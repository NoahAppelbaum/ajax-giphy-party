"use strict";

console.log("Let's get this party started!");
const API_KEY = "a4spUafLfMvXRhFWpwTlHP6sGHpLQJwr";

/** handleSearch: gets search term from form and calls functions
 * to search with API and post image to page
 */
async function handleSearch(evt) {
  evt.preventDefault();

  const searchTerm = $("input").val();

  const gifUrl = await getGifUrl(searchTerm);

  addImageToPage(gifUrl);

  // $("form").get().reset();
}

/** getGifUrl: accepts string searchTerm to make API call to GIPHY for a URL */
async function getGifUrl(searchTerm) {
  const parameters = new URLSearchParams({
    api_key: API_KEY,
    q: searchTerm,
    limit: 1
  });
  const response = await fetch(
    `https://api.giphy.com/v1/gifs/search?${parameters}`
  );
  const giphyData = await response.json();
  const gifUrl = await giphyData.data[0].images.original.url;

  return gifUrl;
}

/** addImageToPage: Updates DOM with new GIF based
 *  on passed URL in the display area */
function addImageToPage(gifUrl) {
  const $img = $("<img>").attr("src", gifUrl);
  $(".display-area").append($img.get());

}


/** removeGifs: clears display area in DOM */
function removeGifs() {
  $(".display-area").html("");
}


$("form").on("submit", handleSearch);
$(".remove-button").on("click", removeGifs);
