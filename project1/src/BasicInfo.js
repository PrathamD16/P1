import React, { useState } from "react";
import { Button, Card } from "@mui/material";
import Description from "./Description";

function BasicInfo({
  company,
  name,
  address,
  website,
  email,
  username,
  phone,
}) {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("View Details");

  const clickHandler = () => {
    if (text == "View Details") {
      setText("Hide Details");
      setOpen(true);
    } else {
      setText("View Details");
      setOpen(false);
    }
  };

  return (
    <div>
      <Card
        sx={{backgroundColor:"#595A5C"}}
        variant="outlined"
        className="flex col-span-5 justify-between py-5 items-center px-5 mt-2"
      >
        <p className="text-white text-lg">{company.name}</p>
        <div className="text-white">
          <p className="font-bold text-lg">CONTACTS</p>
          <p>{name}</p>
        </div>
        <div className="text-white">
          <p className="font-bold text-lg">STREET</p>
          <p>{address.street}</p>
        </div>
        <div className="text-white">
          <p className="font-bold text-lg">CITY</p>
          <p>{address.city}</p>
        </div>
        <Button variant="contained" onClick={clickHandler}>
          {text}
        </Button>
      </Card>
      {open ? (
        <Description
        name={name}
        email={email}
        phone={phone}
        address={address}
        />
      ) : (
        <></>
      )}
    </div>
  );
}

export default BasicInfo;
