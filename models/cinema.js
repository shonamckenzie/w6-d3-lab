const Cinema = function (films) {
  this.films = films;
};


Cinema.prototype.listTitles = function() {
  const titles =  this.films.map(function(film){
    return film.title
  })
  return titles
}

Cinema.prototype.findFilmByTitle = function(title) {
  const foundFilm = this.films.filter(film => {
    return film.title === title
  })
 return foundFilm
}

Cinema.prototype.findFlmByGenre = function (genre) {
  const foundFilm = this.films.filter(film => {
    return film.genre === genre
  })
  return foundFilm
};

Cinema.prototype.findFilmByYear = function (year) {
  const foundFilm = this.films.filter(film => {
    return film.year === year
  })
  return foundFilm
};

Cinema.prototype.checkFilmsOverLength = function (time) {
 return this.films.every((film) => {
   return film.length >= time
 })
};


Cinema.prototype.totalRunningTime = function () {
  const runTimes = this.films.map(function(film){
    return film.length
  })
  const total = runTimes.reduce((runningTotal, runTime) => {
    return runningTotal + runTime
  })
  return total
};


module.exports = Cinema;
