import React, { useContext } from "react";
import { useRouter } from "next/router";
import { Button, Card, CardBody, CardTitle, Badge } from "reactstrap";
import AppContext from "./context"; // Make sure the path to context is correct
import Link from "next/link";

function Cart() {
  const { cart, addItem, removeItem } = useContext(AppContext);
  const router = useRouter();

  // Ensure cart is not undefined with a default empty object
  const safeCart = cart || { items: [], total: 0 };

  const renderItems = () => {
    // Now we can safely destructure items from safeCart
    const { items } = safeCart;

    // If items is not empty, map over them and render UI components
    if (items.length) {
      return items.map((item) => {
        if (item.quantity > 0) {
          return (
            <div className="items-one" style={{ marginBottom: 15 }} key={item.id}>
              <div>
                <span id="item-price">&nbsp; ${item.price}</span>
                <span id="item-name">&nbsp; {item.name}</span>
              </div>
              <div>
                <Button
                  style={{
                    height: 25,
                    padding: 0,
                    width: 15,
                    marginRight: 5,
                    marginLeft: 10,
                  }}
                  onClick={() => addItem(item)}
                  color="link"
                >
                  +
                </Button>
                <Button
                  style={{
                    height: 25,
                    padding: 0,
                    width: 15,
                    marginRight: 10,
                  }}
                  onClick={() => removeItem(item)}
                  color="link"
                >
                  -
                </Button>
                <span style={{ marginLeft: 5 }} id="item-quantity">
                  {item.quantity}x
                </span>
              </div>
            </div>
          );
        }
      });
    } else {
      return <div>Your cart is empty.</div>;
    }
  };

  const checkoutItems = () => {
    return (
      <div>
        <Badge style={{ width: 200, padding: 10 }} color="light">
          <h5 style={{ fontWeight: 100, color: 'gray' }}>Total:</h5>
          <h3>${safeCart.total}</h3>
        </Badge>
        <Link href="/checkout/" passHref>
          <Button style={{ width: '60%' }} color="primary">
            Order
          </Button>
        </Link>
      </div>
    );
  };

  // Return the cart component UI
  return (
    <div>
      <h1>Cart</h1>
      <Card style={{ padding: "10px 5px" }} className="cart">
        <CardTitle style={{ margin: 10 }}>Your Order:</CardTitle>
        <hr />
        <CardBody style={{ padding: 10 }}>
          <div style={{ marginBottom: 6 }}>
            <small>Items:</small>
          </div>
          <div>
            {renderItems()}
          </div>
          <div>
            {checkoutItems()}
          </div>
        </CardBody>
      </Card>
      <style jsx>{`
        #item-price {
          font-size: 1.3em;
          color: rgba(97, 97, 97, 1);
        }
        #item-quantity {
          font-size: 0.95em;
          padding-bottom: 4px;
          color: rgba(158, 158, 158, 1);
        }
        #item-name {
          font-size: 1.3em;
          color: rgba(97, 97, 97, 1);
        }
      `}</style>
    </div>
  );
}

export default Cart;
