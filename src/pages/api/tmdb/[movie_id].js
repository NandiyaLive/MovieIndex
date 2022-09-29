export default async (req, res) => {
  const api_key = process.env.API_KEY;
  const { movie_id } = req.query;

  fetch(
    `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${api_key}&language=en-US`
  )
    .then((response) => response.json())
    .then((tmdbData) => {
      return res.status(200).json(tmdbData);
    })
    .catch((err) => {
      console.log(err.message);
    });
};
