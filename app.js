const carousel = document.querySelector(".carouselBox");
let scrollPerClick;
let imagePadding = 20;

showMovieData();

let scrollAmount = 0;

function scrollToLeft() {
  carousel.scrollTo({
    top: 0,
    left: (scrollAmount -= scrollPerClick),
    behavior: "smooth"
  });

  if (scrollAmount < 0) {
    scrollAmount = 0
  }
}

console.log(carousel.scrollWidth, carousel.clientWidth, carousel.scrollWidth - carousel.clientWidth)
function scrollToRight() {
  if (scrollAmount <= carousel.scrollWidth - carousel.clientWidth) {
  console.log(scrollAmount);

    carousel.scrollTo({
      top: 0,
      left: (scrollAmount += scrollPerClick),
      behavior: "smooth"
    });
  }
}

async function showMovieData() {
  const api_key = "e2c0dba11769a019a5a4c9f6fb79ab47";
  // /discover/movie?sort_by=popularity.desc
  let result = await axios.get(
    "https://api.themoviedb.org/3/discover/movie?api_key=" +
    api_key + 
    "&sort_by=popularity.desc"
  )
  result = result.data.results;
  // console.log(result);
  result.map((cur,index) => {
    carousel.insertAdjacentHTML(
      "beforeend",
      `<img class ="img-${index} carousel-img" src="https://tmdb.org/t/p/w185/${cur.poster_path}" />`
    )
  })
  // scrollPerClick = document.querySelector(".img-1").clientWidth + imagePadding; 
  scrollPerClick = 400; 
  console.log(scrollPerClick);
};