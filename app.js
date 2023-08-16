"use strict";

console.log("Let's get this party started!");
const API_KEY = "a4spUafLfMvXRhFWpwTlHP6sGHpLQJwr";


async function handleSearch(evt) {
  evt.preventDefault();

  const searchTerm = $("input").val();

  const embedUrl = await getGifUrl(searchTerm);

  addImageToPage(embedUrl);

  // $("form").get().reset();
}

async function getGifUrl(searchTerm) {
  const parameters = new URLSearchParams({
    api_key: API_KEY,
    q: searchTerm,
    limit: 1
  });
  const response = await fetch(`https://api.giphy.com/v1/gifs/search?${parameters}`);
  const jsonResponse = await response.json();
  const embedUrl = await jsonResponse.data[0].embed_url;

  return embedUrl;
}


function addImageToPage(embedUrl) {
  const $img = $("<img>").attr("src", embedUrl)
debugger;
  $(".display-area").append($img.get())

}


$("form").on("submit", handleSearch)