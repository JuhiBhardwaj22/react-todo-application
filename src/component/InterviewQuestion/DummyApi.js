import { useEffect, useState } from "react";

const DummyApi = () => {
  const [apiData, setAPIData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const data = await fetch(
      "https://api.slingacademy.com/v1/sample-data/photos"
    );
    const res = await data.json();
    setAPIData(res.photos);
    console.log("data", res.photos);
  }
  return (
    <div
      style={{
        flexWrap: "wrap",
        display: "flex",
        justifyContent: "space-evenly",
      }}
    >
      {apiData.map((item, index) => {
        return (
          <div>
            <img
              src={item.url}
              style={{
                width: "200px",
                height: "100px",
              }}
            />
            {/* <p>{item.description}</p> */}
          </div>
        );
      })}
    </div>
  );
};
export default DummyApi;
