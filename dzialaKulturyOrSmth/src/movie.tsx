interface Props{
    tytul: string;
    rok: number;
    plakat: string;    
}

function Movie({tytul, rok, plakat}: Props){
    return(
    <div>
        <img src={plakat}/>
        <p>{tytul}</p>
        <br></br>
        <p>{rok}</p>  
    </div>
    );
}

export default Movie;