import { useState } from 'react'
import './App.css'

interface FormData {
  imie: string,
  rasa: string,
  klasa: string,
  poziom: number,
  opis: string,
  publiczna: boolean
}

function App() {
  const [formData, setFormData] = useState<FormData>({
    imie: "",
    rasa: "none",
    klasa: "none",
    poziom: 0,
    opis: "",
    publiczna: true
  });

  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});

  const [present, setPresent] = useState<Boolean>(false);

  const [character, setCharacter] = useState<FormData>({
    imie: "",
    rasa: "none",
    klasa: "none",
    poziom: 0,
    opis: "",
    publiczna: true
  });

  const handle = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) =>  {
    const target = event.target
    const value = 
      target instanceof HTMLInputElement && target.type=="checkbox" ? target.checked : target.value;
    setFormData(prev => ({
      ...prev,
     [target.name]: value
    }))
      
  }

  const validate = (event: any) =>  {
    event.preventDefault();
    const errors: Partial<Record<keyof FormData, string>> = {};
    if(formData.imie.length < 3 || formData.imie.length > 20){ errors.imie = "Imie musi być dłuższe niż 3 znaki i krótsze niz 20 znaków"}
    if(formData.rasa = "none"){ errors.rasa = "Wybierz jedną z opcji"}
    if(formData.klasa = "none"){ errors.klasa = "Wybierz jedną z opcji"}
    if(formData.poziom < 0 || formData.poziom > 100){ errors.poziom = "Poziom musi być większy niz 0 ale mniejszy niż 100 znaków"}
    if(formData.opis.length > 200){ errors.opis = "Opis musi byc krótszy niż 200 znaków"}

    if(Object.keys(errors).length > 0){
      setErrors(errors);
      setPresent(false);
    }
    else{ 
      setPresent(true);
      setCharacter(formData);
    }
  }

  return (
    <>
      <form>
        <label>Imie postaci</label><br/>
        {errors.imie && (
          <p className="error">
            {errors.imie}
          </p>
        )}
        <input
          type='text'
          required
          value={formData.imie}
          name="imie"
          onChange={(event) => handle(event)}
          /><br/>

        <label>Rasa</label><br/>
        {errors.rasa && (
          <p className="error">
            {errors.rasa}
          </p>
        )}
        <select name="rasa" value={formData.rasa} onChange={(event) => handle(event)}>
          <option value="none">Wybierz rase</option>
          <option value="Człowiek">Człowiek</option>
          <option value="Elf">Elf</option>
          <option value="Krasnolud">Krasnolud</option>
          <option value="Ork">Ork</option>
        </select><br/>

        <label>Klasa</label><br/>
        {errors.klasa && (
          <p className="error">
            {errors.klasa}
          </p>
        )}
        <select name="klasa" value={formData.klasa} onChange={(event) => handle(event)}>
          <option value="none">Wybierz klase</option>
          <option value="wojownik">Wojownik</option>
          <option value="mag">Mag</option>
          <option value="łucznik">Łucznik</option>
        </select><br/>

        <label>Poziom</label><br/>
        {errors.poziom && (
          <p className="error">
            {errors.poziom}
          </p>
        )}
        <input 
          type='number'
          required
          value={formData.poziom}
          name="poziom"
          min={0}
          max={100}
          onChange={(event) => handle(event)}
        /><br/>

        <label>Opis</label><br/>
        {errors.opis && (
          <p className="error">
            {errors.opis}
          </p>
        )}
        <textarea
        maxLength={200}
        value={formData.opis}
        name="opis"
        onChange={(event) => handle(event)}
        /><br/>

        <label>Postać publiczna</label><br/>
        <input
          type='checkbox'
          checked={formData.publiczna}
          name='publiczna'
          onChange={(event) => handle(event)}
        /><br/>

        <button 
          type='submit'
          onClick={(event) => validate(event)}
        >
          Zapisz
        </button>
      </form>


      {present && (
        <div>
          <p>imie: {character.imie}</p>
          <p>rasa: {character.rasa}</p>
          <p>klasa: {character.klasa}</p>
          <p>poziom: {character.poziom}</p>
          <p>opis: {character.opis}</p>
          <p>postac publiczna: {character.publiczna == true ? (<>tak</>) : (<>nie</>)}</p>
        </div>
      )}
    </>
  )
}

export default App
