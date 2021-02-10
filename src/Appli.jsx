import "normalize.css";
import "./Appli.scss";
import EnTete from "./composants/EnTete";
import BoutonAjoutCarte from "./composants/BoutonAjoutCarte";
import GrilleSujets from "./composants/GrilleSujets";

export default function Appli() {
  return (
    <div className="Appli">
      <EnTete />

      <GrilleSujets />

      <BoutonAjoutCarte />
    </div>
  );
}
