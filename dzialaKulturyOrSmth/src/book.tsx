interface Props{
    tytul: string;
    rok: number;
    autor: string
    plakat: string;    
}

function Book({tytul, rok, autor, plakat}: Props){
    return(
    <div>
        <img src={plakat}/>
        <p>{autor}</p>
        <br></br>
        <p>{tytul}</p>
        <br></br>
        <p>{rok}</p>  
    </div>
    );
}

export default Book;