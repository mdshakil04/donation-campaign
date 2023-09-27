import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredDonationInfo } from "../../Utilities/locallstorage";
import DonatedAmount from "./DonatedAmount";

const Donations = () => {
  const donations = useLoaderData();
  const [donateAmount, setDonateAmount] = useState([]);
  const [showDataLength, setShowDataLength] = useState(4);
  useEffect(() => {
    const storedDonationId = getStoredDonationInfo();
    if (donations.length > 0) {
      const donationAmount = [];
      for (const id of storedDonationId) {
        const donation = donations.find((donation) => donation.id === id);
        if (donation) {
          donationAmount.push(donation);
        }
      }
      setDonateAmount(donationAmount);
    }
  }, [donations]);
  return (
    <div className=" text-center">
      <div className=" text-center lg:grid lg:grid-cols-2 gap-8 mx-auto container mt-8 p-4">
        {donateAmount.slice(0, showDataLength).map((donation) => (
          <DonatedAmount key={donation.id} donation={donation}></DonatedAmount>
        ))}
      </div>
      <div className={ showDataLength === donations.length && 'hidden' }>
        <button onClick={() => setShowDataLength(donations.length)} className=" my-4 bg-[#009444] text-white p-2 rounded-md ">Show All</button>
      </div>
    </div>
  );
};

export default Donations;
