import { Link } from "react-router-dom";

const Category = ({ category }) => {
  const { id, picture, title, card_category, category_bg_color, card_title_color, card_button_bg_color } = category;
  return (
    <div>
      <Link to={`/category/${id}`}>
        <div style={{background:`${ category_bg_color}`}} className="card card-compact bg-base-100 shadow-xl">
          <figure>
            <img className=" w-full" src={picture} alt="Card-Img" />
          </figure>
          <div className="card-body">
            <p className=" w-fit rounded p-2" style={{background:`${card_button_bg_color}` ,color:`${card_title_color}`}}>{card_category}</p>
            <h2 style={{color:`${card_title_color}`}} className="card-title">{title}</h2>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Category;
