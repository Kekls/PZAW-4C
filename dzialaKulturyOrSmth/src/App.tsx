import Movie from "./movie";
import Book from "./book";
import Music from "./music";

function App(){
  return(
    <div>
      <h1>Filmy</h1>
      <Movie tytul="Star Wars I: The Phantom Menace" rok={1999} plakat="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEumLG07wE9z6JWhm-AHOGOcbD4qg3Mrm5CbcdimbO5A&s=10"/>
      <Movie tytul="Star Wars II: Attack Of The Clones" rok={2002} plakat="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY0T3u8JSprybjM7UeM18tmncz4Imo-S2iiDrFEmSiNg&s=10"/>
      <Movie tytul="Star Wars III: Revenge Of The Siths" rok={2005} plakat="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhTbyZN4EyyWpsOPY9-ZeT069NppnTuCZyT_My9OJdPQ&s=10"/>

      <h1>Ksiazki</h1>
      <Book tytul="Akademia Pana kleks" rok={1946} autor="Jan Brzechwa" plakat="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3xdphA1KEpkT5wPKfDTC9L8iPPVuwcBxLgsy4WdoMjQ&s=10"/>
      <Book tytul="Lalka" rok={1889} autor="Bolesław Prus" plakat="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-zwpKZ-HOjYVzgqEcLGTemcA11W6_tuoqR6h25Ms7zA&s=10"/>
      <Book tytul="Maly Ksiaze" rok={1943} autor="Antoine de Saint-Exupéry" plakat="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2cdyqnmsvWbbACdTlEZE8DeVv96QTZvXFYt2qM_oKVA&s=10"/>
      
      <h1>Albumy Muzyczne</h1>
      <Music tytul="Ride The lightning" rok={1984} autor="Metallica" plakat="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXUZI1a1G-KN3cZwf9rP8p_26j_Xei1j8EwAs0gZr6WA&s=10" gatunek="Thrash Metal" 
        listaUtworow={[["Creeping Death", "6:36"], ["Fight Fire with Fire", "4:44"], ["For Whom the Bell Tolls", "5:11"]]} />
      <Music tytul="Legacy" rok={1987} autor="Testament" plakat="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv30ua_lHU97x6hTPohB1c-fzXCuhbSwqHBhZrcdfrxQ&s=10" gatunek="Thrash Metal" 
        listaUtworow={[["Over the Wall", "4:07"], ["Burnt Offerings", "5:07"], ["First Strike Is Deadly", "3:43"]]} />
    </div>
  );
}

export default App