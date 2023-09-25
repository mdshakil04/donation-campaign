import { useLoaderData, useParams } from "react-router-dom";

const DonationDetails = () => {
  const donations = useLoaderData();
  const { id } = useParams();
  const donation = donations.find((donation) => donation.id == id);
  const { picture, title, card_category, category_bg_color, description, price } =
    donation;
  // console.log(id, donation)
  return (
    <div>
      <div className="mt-12 card bg-base-100 shadow-xl container mx-auto w-full lg:w-[1200px] lg:h-[700px]">
        <figure>
          <img className=" w-full lg:w-[1200px] lg:h-[700px]"
            src={picture}
            alt="donation-image"
          />
        </figure>
        <div className=" -mt-24 bg-[#0B0B0B80] h-[130px] opacity-50">
            {/* Background Opacity */}
        </div>
        <div className=" -mt-20 relative">
            <button className="btn absolute z-10 ml-8 text-white w-[150px] mt-4 bg-[#FF444A] border-none">Donate ${price}</button>
        </div>
        <div className=" mt-20 ">
          <h2 className="card-title text-4xl p-4">{title}</h2>
          <p className=" p-4">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default DonationDetails;
