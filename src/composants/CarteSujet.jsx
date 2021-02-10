import { BiMenuAltLeft } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";

export default function CarteSujet() {
  const img =
    "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100&w=225";

  return (
    <article>
      <span>
        <BiMenuAltLeft />
      </span>
      <img src={img} alt="apercu de l'article" />
      <div>
        <h2>Cadriciels</h2>
        <span>
          Modifié : <time>8 février 2021</time>
        </span>
        <BsThreeDotsVertical />
      </div>
    </article>
  );
}
