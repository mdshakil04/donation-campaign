const DonatedAmount = ({ donation }) => {
  const {price, title, picture,donation_pic,card_category, category_bg_color, card_title_color, card_button_bg_color } = donation;
  
  return (
    <div>
        <div style={{background:`${ category_bg_color}`}} className="card card-side bg-base-100 shadow-xl my-4">
            <figure>
                <img className="h-full"
                    src={picture}
                    alt="Image"
                />
            </figure>
            <div className="card-body">
                <p className=" w-fit rounded p-2" style={{background:`${card_button_bg_color}` ,color:`${card_title_color}`}}>{card_category}</p>
                <h2 className="card-title text-2xl">{title}</h2>
                <p style={{color:`${card_title_color}`}} className=" text-start font-bold">${price}</p>
                <div className="card-actions">
                    <button style={{background:`${card_title_color}`}} className="btn btn-primary border-none text-white">View Details</button>
                </div>
            </div>
        </div>
    </div>
  );
};

export default DonatedAmount;
