import React from "react";
import { Card, Button, Stack } from "react-bootstrap";

export default function Dashboard() {
  const userName = "John";
  const balance = 954.31;

  const wallet = [
    {
      id: 1,
      user_id: 1,
      name: "Multi-Currency Account",
    },
    {
      id: 2,
      user_id: 1,
      name: "Travel Account",
    },
    {
      id: 3,
      user_id: 2,
      name: "Trading Account",
    },
    {
      id: 4,
      user_id: 3,
      name: "Multi-Currency Account",
    },
    {
      id: 5,
      user_id: 4,
      name: "Trip to Japan",
    },
  ];

  return (
    <>
      <Card className="mb-5">
        <Card.Body>
          <h2 className="text-left mb-4">{userName}</h2>
          <h2 className="text-center mb-4">SGD: ${balance.toFixed(2)}</h2>
          <Stack direction="horizontal">
            <h5>Exchange Rates</h5>
            <Button className="ms-auto">View more</Button>
          </Stack>
        </Card.Body>
      </Card>

      {wallet.map((wallet) => (
        <Card
          key={wallet.id}
          className="mb-2 mx-auto"
          style={{ maxWidth: "400px" }}
        >
          <Card.Body>
            <h4 className="text-left mb-4">{wallet.name}</h4>
            <Stack direction="horizontal">
              <h5>Amount: $0.00 SGD</h5>
              <Button className="ms-auto">View Wallet</Button>
            </Stack>
          </Card.Body>
        </Card>
      ))}
    </>
  );
}
