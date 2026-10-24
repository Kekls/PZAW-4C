export interface Props{
    tytul: string;
    rok: number;
    autor: string
    plakat: string;    
}

function Book({tytul, rok, autor, plakat}: Props){
    return(
    <div className="card">
        <img src={plakat} className="card-img-top"/>
        <div className="card-body">
            <p className="card-title">{tytul}</p>
            <p className="card-text">{autor}</p>
            <p className="card-text">{rok} {rok < 2000 && ", klasyka"}</p>
            <br />
        </div>
    </div>
    );
}

export default Book;