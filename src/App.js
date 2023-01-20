import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [data, setData] = useState([]);

  const handleAPI = async () => {
    await axios
      .get(`http://jsonplaceholder.typicode.com/photos`)
      .then((res) => {
        console.log("res-->", res.data);
        setData(res.data);
      })
      .catch((e) => console.log(e));
  };
  useEffect(() => {
    handleAPI();
  }, []);

  return (
    <div className="App">
      <div className="navbar">
        <div className="navItems">
          <h3>Instagram</h3>
          <div>
            <input type="text" placeholder="search"></input>
          </div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <button style={{ cursor: "pointer" }}>Log In</button>
            <button style={{ cursor: "pointer" }}>Sign Up</button>
          </div>
        </div>
      </div>
      <div className="mainContainer">
        <div className="profileItems">
          <div className="imgDiv">
            <img
              style={{ borderRadius: "10rem" }}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBj7RdcuQEaFhIjMxzuplPK8ZViJCIA5GV940J0TS02Q&s"
              alt="virat"
            ></img>
          </div>
          <div className="details">
            <div
              style={{
                display: "flex",
                height: "2rem",
                width: "70%",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <h4>virat.kohli</h4>
              <button style={{ cursor: "pointer" }}>Follow</button>
              <button style={{ cursor: "pointer" }}>Message</button>
              <span>...</span>
            </div>
            <div
              style={{
                width: "75%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <h4>
                1502
                <span style={{ marginLeft: "0.2rem", fontWeight: "lighter" }}>
                  posts
                </span>
              </h4>
              <h4>
                232M
                <span style={{ marginLeft: "0.2rem", fontWeight: "lighter" }}>
                  followers
                </span>
              </h4>
              <h4>
                262
                <span style={{ marginLeft: "0.2rem", fontWeight: "lighter" }}>
                  following
                </span>
              </h4>
            </div>
            <div>
              <h4 style={{ margin: "0" }}>Virat Kohli</h4>
              <p style={{ margin: "0 " }}>Carpediem!</p>
              <h4 style={{ margin: "0" }}>
                <a
                  href="https://one8.com/"
                  style={{ textDecorationLine: "none" }}
                >
                  one8.com
                </a>
              </h4>
            </div>
          </div>
        </div>
        <div style={{ width: "100%", border: "0.2px solid #8e8e8e" }}></div>
        <div
          style={{
            dsiplay: "flex",
            alignItem: "center",
            justifyContent: "center",
          }}
        >
          <a
            href="asas"
            style={{ marginRight: "3rem", textDecorationLine: "none" }}
          >
            POSTS
          </a>
          <a
            href="asas"
            style={{ marginRight: "3rem", textDecorationLine: "none" }}
          >
            REELS
          </a>
          <a href="asas" style={{ textDecorationLine: "none" }}>
            TAGGED
          </a>
        </div>
        <div className="picsDiv">
          <div>
            <img
              style={{
                width: "18rem",
                height: "15rem",
                margin: "0.6rem 0.6rem 0.6rem 0",
              }}
              src="https://imageio.forbes.com/specials-images/imageserve/5ecebee7938ec500060ab34f/0x0.jpg?format=jpg&crop=2336,2337,x1064,y702,safe&height=416&width=416&fit=bounds"
              alt="img"
            ></img>
            <img
              style={{
                width: "18rem",
                height: "15rem",
                margin: "0.6rem 0.6rem 0.6rem 0",
              }}
              src="https://assets.vogue.in/photos/5fc09f90a025ea1dce75c879/2:3/w_900,h_1350,c_limit/Anushka%20Sharma%20and%20Virat%20Kohli%20pregnancy.jpg"
              alt="img"
            ></img>
            <img
              style={{ width: "18rem", height: "15rem", margin: "0.6rem" }}
              src="https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/01/19/1015456-virat-kohli.jpg"
              alt="img"
            ></img>
          </div>
          <div>
            <img
              style={{
                width: "18rem",
                height: "15rem",
                margin: "0.6rem 0.6rem 0.6rem 0",
              }}
              src="https://imageio.forbes.com/specials-images/imageserve/5ecebee7938ec500060ab34f/0x0.jpg?format=jpg&crop=2336,2337,x1064,y702,safe&height=416&width=416&fit=bounds"
              alt="img"
            ></img>
            <img
              style={{
                width: "18rem",
                height: "15rem",
                margin: "0.6rem 0.6rem 0.6rem 0",
              }}
              src="https://assets.vogue.in/photos/5fc09f90a025ea1dce75c879/2:3/w_900,h_1350,c_limit/Anushka%20Sharma%20and%20Virat%20Kohli%20pregnancy.jpg"
              alt="img"
            ></img>
            <img
              style={{ width: "18rem", height: "15rem", margin: "0.6rem" }}
              src="https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/01/19/1015456-virat-kohli.jpg"
              alt="img"
            ></img>
          </div>
          <div>
            <img
              style={{
                width: "18rem",
                height: "15rem",
                margin: "0.6rem 0.6rem 0.6rem 0",
              }}
              src="https://imageio.forbes.com/specials-images/imageserve/5ecebee7938ec500060ab34f/0x0.jpg?format=jpg&crop=2336,2337,x1064,y702,safe&height=416&width=416&fit=bounds"
              alt="img"
            ></img>
            <img
              style={{
                width: "18rem",
                height: "15rem",
                margin: "0.6rem 0.6rem 0.6rem 0",
              }}
              src="https://assets.vogue.in/photos/5fc09f90a025ea1dce75c879/2:3/w_900,h_1350,c_limit/Anushka%20Sharma%20and%20Virat%20Kohli%20pregnancy.jpg"
              alt="img"
            ></img>
            <img
              style={{ width: "18rem", height: "15rem", margin: "0.6rem" }}
              src="https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/01/19/1015456-virat-kohli.jpg"
              alt="img"
            ></img>
          </div>
        </div>
        <div
          className="footer"
          style={{ border: " 0.5px solid GrayText", marginBottom: "3rem" }}
        >
          <div>
            <h6
              style={{ fontWeight: "bold", color: "GrayText", fontSize: "400" }}
            >
              Related accounts
            </h6>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              marginBottom: "2rem",
            }}
          >
            <div className="accounts"></div>
            <div className="accounts"></div>
            <div className="accounts"></div>
            <div className="accounts"></div>
            <div className="accounts"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

// {data.map((item) => {
//   return (
//     <div className="pics">
//       <img src={item.thumbnailUrl} alt="img"></img>
//     </div>
//   );
// })}
