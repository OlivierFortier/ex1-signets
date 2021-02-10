import "normalize.css";
import "./Appli.scss";
import EnTete from "./composants/EnTete";
import BoutonAjoutCarte from "./composants/BoutonAjoutCarte";
import GrilleSignets from "./composants/GrilleSignets";

export default function Appli() {

  const utilisateurConnecte = "Camille Semaan";

  return (
    <div className="Appli">
      <EnTete utilisateur={utilisateurConnecte} />

      <GrilleSignets />

      <BoutonAjoutCarte />
    </div>
  );
}
