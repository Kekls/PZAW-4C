export interface Props{
    tytul: string;
    rok: number;
    plakat: string;
    rating: number;
}

function Movie({tytul, rok, plakat, rating}: Props){
    return(
    <div className="card" onClick={(() => console.log(`Wybrano film: ${tytul}`))}>
        <img src={plakat} className="card-img-top"/>
        <div className="card-body">

            <p className="card-title">{tytul}</p>
            <p className="card-text">{rok}</p>
            <p className="card-text">rating: {rating}/10 {rating >= 8 && ", polecany"}</p>
            <button onClick={(() => console.log(`Kliknieto! tytul:${tytul}`))}>Pokaż szczegóły</button>
            <br />
        </div>
    </div>
    );
}

export default Movie;
