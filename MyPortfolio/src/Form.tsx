import {useState, FormEvent, ChangeEvent} from "react";

export default function Liste() { // les props (infoliste et listeDelete)
  const [liste, setListe] = useState([
    {id: 1, nom: "premier"},
    {id: 2, nom: "second"}
  ]);
  const [newListe, setnewListe] = useState("");

  // Comportement
  const DeletList = (id: number) => {
    const listeCopy = [...liste];
    const listeCopyUpdt = listeCopy.filter((liste) => liste.id !== id);
    setListe(listeCopyUpdt);
  }
  const submitList = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const listeCopy = [...liste]; // copie de state
    const id = new Date().getTime(); // manipulation du copie de state
    const nom = newListe;
    listeCopy.push({id: id, nom: nom}); // pusher
    setListe(listeCopy); // modif du state
    setnewListe("");
  };
  const listeChange = (event: ChangeEvent<HTMLInputElement>) => {
    setnewListe(event.target.value);
  };

  return (
    <>
    <ul>
        {liste.map((list) => (
          <li key={list.id}>
          {list.nom}{" "}
          <button onClick={() => DeletList(list.id)}>X</button>
          </li>
        ))}
      </ul>
      <form action="" onSubmit={submitList}>
        <input type="text" value={newListe} placeholder='entrer une liste !' onChange={listeChange}/>
        <button style={{color: 'red'}}>ajouter +</button>
      </form>
    </>
    )
}