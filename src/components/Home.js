import React, { useState } from "react";
import "./style.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CardData from "./CardData";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/features/cartSlice"
import toast from "react-hot-toast";


function Home() {
  const [cartData, setCartData] = useState(CardData);
  const dispatch = useDispatch();

  const send = (e) => {
    dispatch(addToCart(e));
    toast.success("Item added In Your Cart");
  }
  return (
    <>
      <section className="item-section mt-4 container">
        <h2 className="px-4" style={{ fontWeight: "400" }}>
          Restaurants in Hyderabad Open now
        </h2>
        <div className="row mt-2 d-flex justify-content-around align-item-center">
          {cartData.map((element, index) => {
            return (
              <>
                <Card
                  style={{ width: "22rem", border: "none" }}
                  className="hove mb-4"
                >
                  <Card.Img
                    className="cd"
                    variant="top"
                    src={element.imgdata}
                  />
                  <div className="card-body">
                    <div className="upper_data d-flex justify-content-between align-item-center">
                      <h4 className="mt-2">{element.dish}</h4>
                      <span>&nbsp;{element.rating}☆</span>
                    </div>

                    <div className="lower_data d-flex justify-content-between">
                      <h5>{element.address}</h5>
                      <span>{element.price}</span>
                    </div>
                    <div className="extra"></div>
                    <div className="last_data d-flex justify-content-between align-item-center">
                      <img src={element.arrimg} className="limg" alt="" />
                      <Button
                        style={{
                          width: "150px",
                          background: "#ff3054db",
                          border: "none",
                        }}
                        variant="outline-light"
                        className="mt-2 mb-2"
                        onClick={()=>send(element)}
                      >
                        Add To Cart
                      </Button>
                      <img src={element.delimg} className="laimg" alt="" />
                    </div>
                  </div>
                </Card>
              </>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default Home;
