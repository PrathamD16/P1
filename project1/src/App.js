import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Card,
  CardActionArea,
  Accordion,
  Button,
  AccordionSummary,
  AccordionDetails,
  AccordionActions,
  Typography,
} from "@mui/material";
import BasicInfo from "./BasicInfo";

export default function App() {
  const [data, setData] = useState([]);

  const [expand, setExpand] = useState(false);
  const [text, setText] = useState("View Details");

  const clickHandler = () => {
    if (text == "VIEW DETAILS") {
      setText("SꓶIⱯꓕƎꓷ ƎꓷIH");
    } else {
      setText("VIEW DETAILS");
    }
  };

  const d2 = {
    id: 1,
    name: "ABC",
    username: "ABC7894",
    email: "ABC@123gmail.com",
    address: {
      street: "Kulas Light",
      suite: "XYZ APT",
      city: "Gwenborough",
      zipcode: "789456-1231",
      geo: {
        lat: "-896.123",
        lng: "-412-786",
      },
    },
    phone: "7894561230",
    website: "google.com",
    company: {
      name: "One Plus",
      catchPhrase: "Client-Server-Company",
      bs: "harness real-time marketing",
    },
  };

  useEffect(() => {
    async function fetchData() {
      const profile = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setData(profile.data);
    }
    fetchData();
  });

  return (
    <div className="p-[1rem] bg-slate-400">
      {data.map((d1) => (
        <BasicInfo key={d1.id} company={d1.company} name={d1.name} email={d1.email} username={d1.username} website={d1.website} address={d1.address} phone={d1.phone} />
      ))}
    </div>
  );
}
