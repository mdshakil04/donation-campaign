import { useEffect, useState } from "react";
import Category from "../Category/Category";

const AllCategories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then( data => setCategories(data))
    },[])
    return (
        <div className=" mx-auto container">
            {/* <h1>All Catagories here {categories.length}</h1> */}
            <div className=" lg:grid lg:grid-cols-4 md:grid md:grid-cols-2 gap-4 p-4 mb-4">
                {
                    categories.map(category => <Category 
                    key={category.id}
                    category={category}
                    ></Category>)
                }
            </div>
        </div>
    );
};

export default AllCategories;