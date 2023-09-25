import { Link } from "react-router-dom";

const Category = ({ category }) => {
  const { id, picture, title, card_category, category_bg_color } = category;
  return (
    <div>
      <Link to={`/category/${id}`}>
        <div className="card card-compact bg-base-100 shadow-xl">
          <figure>
            <img className=" w-full" src={picture} alt="Card-Img" />
          </figure>
          <div className="card-body">
            <p>{card_category}</p>
            <h2 className="card-title">{title}</h2>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Category;
