import React from "react";
import { Card } from "@mui/material";

function Description({ phone, website, email, username, name, address }) {
  return (
    <div>
      <Card sx={{backgroundColor:'#DDE2E7'}} variant="outlined" elevation={6} className="mb-4 p-5">
        <div className="mx-[15rem]">
          <div className="py-2">
            <p className="font-bold text-md">DESCRIPTION</p>
            <p className="text-sm">THIS IS DESCRIPTION OF A PERSON.</p>
          </div>

          <div className="flex justify-between mt-5 mb-3">
            <div id="column1" className="space-y-3">
              <div>
                <p className="text-md font-bold">CONTACT PERSON</p>
                <p className="text-sm">{name}</p>
              </div>
              <div>
                <p className="text-md font-bold">DESIGNATION</p>
                <p className="text-sm">XYZ DESIGNATION</p>
              </div>
              <div>
                <p className="text-md font-bold">EMAILS</p>
                <p className="text-sm">{email}</p>
              </div>
              <div>
                <p className="text-md font-bold">PHONES</p>
                <p className="text-sm">{phone}</p>
              </div>
            </div>
            <div id="column2" className="space-y-3">
              <div>
                <p className="text-md font-bold">ADDRESS</p>
                <p className="text-sm">
                  {address.street}, {address.suite}, {address.city},{" "}
                  {address.zipcode}
                </p>
              </div>
              <div>
                <p className="text-md font-bold">STREET</p>
                <p className="text-sm">{address.street}</p>
              </div>
              <div>
                <p className="text-md font-bold">CITY</p>
                <p className="text-sm">{address.city}</p>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default Description;
