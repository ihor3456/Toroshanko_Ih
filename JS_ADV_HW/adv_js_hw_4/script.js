// отправляем запрос на получение списка фильмов
fetch("https://ajax.test-danit.com/api/swapi/films")
  .then((response) => response.json())
  .then((films) => {
    // выводим список фильмов на экран
    const filmList = document.createElement("ul");
    films.forEach((film) => {
      console.log(film);
      const filmItem = document.createElement("li");
      filmItem.innerHTML = "Episode " + film.episodeId + ": " + film.name;
      // console.log(filmItem);
      filmItem.addEventListener("click", () => {
        const characters = document.createElement("div");
        filmItem.append(characters);
        const crawl = document.createElement("p");
        crawl.innerHTML = `${film.openingCrawl}`;
        filmItem.append(crawl);
        // characters.innerHTML = `${film.characters}`;
        film.characters.forEach((char) => {
          fetch(char)
            .then((response) => response.json())
            .then((item) => {
              const listPerson = document.createElement("ul");
              const itemPerson = document.createElement("li");
              characters.append(listPerson);
              itemPerson.innerHTML = `${item.name}`;
              listPerson.append(itemPerson);
              // characters.push(item.name);
              return;
            });
        });
        // отправляем запрос на получение списка персонажей
        //   fetch(film.characters[0])
        //     .then((response) => response.json())
        //     .then((characters) => {
        //       // выводим список персонажей на экран
        //       const characterList = document.createElement("ul");
        //       characters.forEach((character) => {
        //         console.log(character);
        //         const characterItem = document.createElement("li");
        //         characterItem.innerHTML = character.name;
        //         characterList.appendChild(characterItem);
        //       });
        //       filmItem.appendChild(characterList);
        //     });
      });
      filmList.appendChild(filmItem);
    });
    document.body.appendChild(filmList);
  });
