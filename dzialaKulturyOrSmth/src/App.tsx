import { useState } from "react";

import Movie from "./movie";
import Book from "./book";
import Music from "./music";

import type { Props as movieProps } from "./movie";
import type { Props as bookProps } from "./book";
import type { Props as musicProps } from "./music";

const movies: movieProps[] = [
  { tytul:"Star Wars I: The Phantom Menace" , rok: 1999, plakat:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEumLG07wE9z6JWhm-AHOGOcbD4qg3Mrm5CbcdimbO5A&s=10", rating:7 },
  { tytul:"Star Wars II: Attack Of The Clones", rok:2002,  plakat:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY0T3u8JSprybjM7UeM18tmncz4Imo-S2iiDrFEmSiNg&s=10", rating:9},
  { tytul:"Star Wars III: Revenge Of The Siths", rok:2005, plakat:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhTbyZN4EyyWpsOPY9-ZeT069NppnTuCZyT_My9OJdPQ&s=10", rating:10},
  { tytul:"Star Wars: The Rise of Skywalker", rok:2019, plakat:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8OdSikZPqFMYY-D9x4eaG74-JO-NTjOdAM9Ic5Gbs2w&s=10", rating:3}
];

const books: bookProps[] = [
  { tytul:"Akademia Pana kleks", rok:1946, autor:"Jan Brzechwa", plakat:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3xdphA1KEpkT5wPKfDTC9L8iPPVuwcBxLgsy4WdoMjQ&s=10"},
  { tytul:"Lalka", rok:1889, autor:"Bolesław Prus", plakat:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-zwpKZ-HOjYVzgqEcLGTemcA11W6_tuoqR6h25Ms7zA&s=10"},
  { tytul:"Maly Ksiaze", rok:1943, autor:"Antoine de Saint-Exupéry", plakat:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2cdyqnmsvWbbACdTlEZE8DeVv96QTZvXFYt2qM_oKVA&s=10"}
];

const musics: musicProps[] = [
  { tytul:"Ride The lightning", rok:1984, autor:"Metallica", plakat:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXUZI1a1G-KN3cZwf9rP8p_26j_Xei1j8EwAs0gZr6WA&s=10", gatunek:"Thrash Metal", 
        listaUtworow:[["Creeping Death", "6:36"], ["Fight Fire with Fire", "4:44"], ["For Whom the Bell Tolls", "5:11"]]},
  { tytul:"Legacy", rok:1987, autor:"Testament", plakat:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv30ua_lHU97x6hTPohB1c-fzXCuhbSwqHBhZrcdfrxQ&s=10", gatunek:"Thrash Metal", 
        listaUtworow:[["Over the Wall", "4:07"], ["The Haunting", "4:11"], ["Burnt Offerings", "5:07"], ["First Strike Is Deadly", "3:43"]]}
];

function App(){
  const mostTunes = [...musics].sort((a,b) => b.listaUtworow.length - a.listaUtworow.length)[0];

  const [movieIsOpen, setMovieOpen] = useState(true);
  const [bookIsOpen, setBookOpen] = useState(true);
  const [musicIsOpen, setMusicOpen] = useState(true);

  return(
    <div className="container">
      <h1 onClick={() => setMovieOpen(!movieIsOpen)} className="text-black">Filmy</h1>
      {movieIsOpen && ( <div><div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">{
        [...movies]
        .sort((a,b) => a.tytul.localeCompare(b.tytul))
        .map((movie, key) => (
          <div className="col" key={key}>
            <Movie tytul={movie.tytul} rok={movie.rok} plakat={movie.plakat} rating={movie.rating} key={key}/>
          </div>
        ))}
        </div>

        <h2 className="text-black">Filmy wydane po 2010 roku</h2>

        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3"> 
        {movies
        .filter((n) => n.rok > 2010)
        .map((movie, key) => (
          <div className="col" key={key}>
            <Movie tytul={movie.tytul} rok={movie.rok} plakat={movie.plakat} rating={movie.rating} key={key}/>
          </div>
        ))}
        </div></div>
      )}
      

      <h1 onClick={() => setBookOpen(!bookIsOpen)} className="text-black">Ksiazki</h1>
      {bookIsOpen && ( <div><div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3"> {
        [...books]
        .sort((a,b)=> a.tytul.localeCompare(b.tytul))
        .map((book, key) => (
          <div className="col" key={key}>
            <Book tytul={book.tytul} rok={book.rok} autor={book.autor} plakat={book.plakat} key={key}/>
          </div>
        ))}
      </div>
      <h2 className="text-black">Ksiazki posortowane po roku wydania</h2>

        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3"> 
        {[...books]
        .sort((a,b)=> b.rok - a.rok)
        .map((book, key) => (
          <div className="col" key={key}> 
            <Book tytul={book.tytul} rok={book.rok} autor={book.autor} plakat={book.plakat} key={key}/>
          </div>
        ))}
        </div></div>
      )}
      
      <h1 onClick={() => setMusicOpen(!musicIsOpen)} className="text-black">Albumy Muzyczne</h1>
     {musicIsOpen && (
  <div>
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
      {[...musics]
        .sort((a, b) => a.tytul.localeCompare(b.tytul))
        .map((music, key) => (
          <div className="col" key={key}>
            <Music tytul={music.tytul} rok={music.rok} autor={music.autor} plakat={music.plakat} gatunek={music.gatunek} listaUtworow={music.listaUtworow} />
          </div>
        ))}
    </div>

    <h2 className="text-black">Album muzyczny z największą liczbą utworów</h2>

    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
      <div className="col">
        <Music tytul={mostTunes.tytul} rok={mostTunes.rok} autor={mostTunes.autor} plakat={mostTunes.plakat} gatunek={mostTunes.gatunek} listaUtworow={mostTunes.listaUtworow} />
      </div>
    </div>
  </div>
)}
    </div>
  );
}

export default App