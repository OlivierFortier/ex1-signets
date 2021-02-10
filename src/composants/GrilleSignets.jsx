import CarteSignet from "./CarteSignet";
import listeSignets from "../data/listeSignets.json";

export default function GrilleSignets() {
  return (
    <main style={{display: "flex", flexWrap: "wrap"}}>
      {listeSignets.map((signet) => (
        <CarteSignet
          key={signet.id}
          id={signet.id}
          titre={signet.titre}
          couleur={signet.couleur}
          dateModif={signet.dateModif}
          image={signet.image}
        />
      ))}
    </main>
  );
}
