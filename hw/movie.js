var movies = [
    {
        "title": "Bahubali",
        "genre": "Action",
        "rating": 4.8
    },
    {
        "title": "M S Dhoni",
        "genre": "Inspirational",
        "rating": 9.0
    },
    {
        "title": "Titanic",
        "genre": "Romance",
        "rating": 8.9
    },
    {
        "title": "Pushpa",
        "genre": "Action",
        "rating": 9.2
    }
];
movies.sort(function (m1, m2) {
    return m1.title.localeCompare(m2.title);
});
console.log(movies);
var ratingBelowFiveMovies = movies.filter(function (m) { return m.rating < 5; });
console.log(ratingBelowFiveMovies);
var highRatedMovies = movies.filter(function (m) { return m.rating > 8; });
console.log(highRatedMovies);
movies.forEach(function (o) {
    console.log("Title : ".concat(o.title, ",\n        Genre : ").concat(o.genre, ",\n        Rating : ").concat(o.rating));
});
