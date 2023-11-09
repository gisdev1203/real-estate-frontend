import React from "react";
import ListingFilter from "../pricing/ListingFilter";

const Banner = () => {
  // const [state, setState] = useState([]);
  // const [filter, setFilter] = useState([]);
  // const [screen2, setScreen2] = useState(null);

  const filterData = (data) => {
    // setScreen2(true);
    console.log(data);
    // const price =
    //   data.price === 0 ? ["0", "900000000007676780"] : data.price.split(",");
    // const status = data.status === undefined ? "" : data.status;
    // const bed = data.bed === "Any amount" ? 0 : data.bed;
    // const bathroom = data.bathroom === "Any amount" ? 0 : data.bathroom;

    // if (status === "") {
    //   const abc = state.filter((item) => {
    //     return (
    //       parseInt(item.Details.beds) >= bed &&
    //       parseInt(item.Details.bathrooms) >= bathroom &&
    //       parseInt(item.BasicInformation.price) >= parseInt(price[0]) &&
    //       parseInt(item.BasicInformation.price) <= parseInt(price[1])
    //     );
    //   });
    //   setFilter(abc);
    // } else {
    //   const abc = state.filter((item) => {
    //     return (
    //       parseInt(item.Details.beds) >= bed &&
    //       parseInt(item.Details.bathrooms) >= bathroom &&
    //       parseInt(item.BasicInformation.price) >= parseInt(price[0]) &&
    //       parseInt(item.BasicInformation.price) <= parseInt(price[1]) &&
    //       item.BasicInformation.type === status
    //     );
    //   });
    //   setFilter(abc);
    // }
  };

  return (
    <div
      className="banner banner-1 banner-3 dark-overlay bg-cover bg-center"
      style={{
        backgroundImage:
          "url(" + process.env.PUBLIC_URL + "/assets/img/banner/3.jpg)",
      }}
    >
      <div className="container">
        <div className="banner-item ">
          <div className="banner-inner text-center">
            <h1 className="title text-white">Move Online</h1>
            <h4 className="text-white">
              Search for your next property to buy or rent in Thailand
            </h4>
            <ListingFilter getData={filterData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
