export interface Props{
    tytul: string;
    rok: number;
    autor: string;
    plakat: string;
    gatunek: string;
    listaUtworow: [string, string][];
}

function handleSongClick(tytulLU: string, tytul: string){
    console.log(`Wybrano utwór: ${tytulLU} z albumu ${tytul}`);
}

function Music({tytul, rok, autor, plakat, gatunek, listaUtworow}: Props){
    return(
    <div className="card">
        <img src={plakat} className="card-img-top"/>
        <div className="card-body">
            <p className="card-title">{tytul}</p>
            <p className="card-text">{autor}</p>
            <p className="card-text">{rok}</p>
            <p className="card-text">{gatunek}</p>
            {listaUtworow.length > 0 ? (
                <table className="table table-striped table-hover">
                    <tbody>
                        {listaUtworow.map(([tytulLU, czas], index) => (
                            <tr key={index} onClick={() => handleSongClick(tytulLU, tytul)}>
                                <td><strong>{tytulLU}</strong></td>
                                <td>{czas}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <div className="alert alert-info" role="alert">
                    Brak utworów
                </div>
            )}
            <br></br>
        </div>
    </div>
    );
}

export default Music;