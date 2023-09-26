const getStoredDonationInfo = () => {
    const storedDonation = localStorage.getItem('donation-data');
    if(storedDonation){
        return JSON.parse(storedDonation);
    }
    return [];
}

const saveDonation = id =>{
    const storedDonations = getStoredDonationInfo();
    const exists = storedDonations.find(donationId => donationId === id);
    if(!exists){
        storedDonations.push(id);
        localStorage.setItem('donation-data' , JSON.stringify(storedDonations))
    }
}

export {getStoredDonationInfo, saveDonation}