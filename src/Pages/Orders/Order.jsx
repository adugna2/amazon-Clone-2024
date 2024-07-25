/* eslint-disable no-unused-vars */
import React, { useContext, useState, useEffect } from "react";
import LayOut from "../../Components/LayOut/LayOut";
import { db } from "../../Utility/firebase";
import { DataContext } from "../../Components/DataProvider/DataProvider";
import classes from "./Order.module.css";
import ProductCard from "../../Components/product/ProductCard";

function Order() {
  const [{ user }] = useContext(DataContext);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
 
    if (user) {
      db.collection("users")
        .doc(user.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) => {
          setOrders(snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data()
          })));
        });
    } else {
      setOrders([]);
    }
  }, [user]);
return (
    <LayOut>
      <section className={classes.container}>
        <div className={classes.Orders_container}>
          <h2>Your Orders</h2>
          {orders.length === 0 && (
            <div style={{ padding: "20px" }}>You do not have any orders yet.</div>
          )}
          <div>
            {orders.map((eachOrder, i) => (
              <div key={i}>
                <hr />
                <p>Order Id: {eachOrder.id}</p>
                {eachOrder.data.basket.map((order) => (
                  <ProductCard
                    key={order.id}
                    product={order}
                    flex={true}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
    </LayOut>
  );
}

export default Order;