interface Props{
    tytul: string;
    rok: number;
    autor: string;
    plakat: string;
    gatunek: string;
    listaUtworow: [string, string][];
}

function Music({tytul, rok, autor, plakat, gatunek, listaUtworow}: Props){
    return(
    <div>
        <img src={plakat}/>
        <p>{autor}</p>
        <br></br>
        <p>{tytul}</p>
        <br></br>
        <p>{rok}</p>
        <p>{gatunek}</p>
        <ul>
            {listaUtworow.map(([tytul, czas], index) => (
                <li key={index}>
                    <strong>{tytul}</strong> - {czas}
                </li>
            ))}
        </ul>
    </div>
    );
}

export default Music;