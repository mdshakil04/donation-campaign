import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredDonationInfo } from "../../Utilities/locallstorage";
import DonatedAmount from "./DonatedAmount";

const Donations = () => {
    const donations = useLoaderData();
    const [donateAmount, setDonateAmount] = useState([]);
    useEffect(() =>{
        const storedDonationId = getStoredDonationInfo();
        if(donations.length > 0){
            const donationAmount = [];
            for(const id of storedDonationId){
                const donation = donations.find(donation => donation.id === id);
                if(donation){
                    donationAmount.push(donation)
                }
            }
            setDonateAmount(donationAmount);
        }
    },[donations])
    return (
        <div className=" text-center grid grid-cols-2 gap-8 mx-auto container">
            {
                donateAmount.map(donation => <DonatedAmount 
                    key={donation.id} 
                    donation={donation}></DonatedAmount>)
            }
        </div>
    );
};

export default Donations;