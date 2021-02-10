import { BiMenuAltLeft } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";

export default function CarteSignet({ id, titre, couleur, dateModif, image }) {
  return (
    <article style={{ backgroundColor: couleur }}>
      <span>
        <BiMenuAltLeft fontSize={50} />
      </span>
      <img src={image} alt="apercu de l'article" />
      <div >
        <h2>{titre}</h2>
        <span>
          Modifié : <time>{dateModif}</time>
        </span>
        <BsThreeDotsVertical fontSize={30} />
      </div>
    </article>
  );
}
