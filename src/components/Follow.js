import React, { useState } from "react";
import { Image, Button } from "react-bootstrap";

export const Follow = () => {
  const [accounts, setAccounts] = useState([
    {
      id: 1,
      name: "Newton",
      following: false,
      pic: "http://placekitten.com/200/190",
    },
    {
      id: 2,
      name: "Einstein",
      following: true,
      pic: "http://placekitten.com/200/300",
    },
    {
      id: 3,
      name: "Bell",
      following: false,
      pic: "http://placekitten.com/200/160",
    },
    {
      id: 4,
      name: "Dijkstra",
      following: false,
      pic: "http://placekitten.com/200/150",
    },
    {
      id: 5,
      name: "Turing",
      following: true,
      pic: "http://placekitten.com/200/120",
    },
    {
      id: 6,
      name: "Lovelace",
      following: true,
      pic: "http://placekitten.com/200/121",
    },
    {
      id: 7,
      name: "Curie",
      following: false,
      pic: "http://placekitten.com/200/128",
    },
  ]);
  return (
    <div
      style={{
        "overflow-y": "scroll",
        height: "500px",
        top: "0",
      }}
    >
      <h6 style={{ "font-family": "Verdana" }}>Recommended for you</h6>
      <div>
        {accounts
          .filter((a) => !a.following)
          .map((account) => (
            //<Account key={account.id} account={account} />
            <div>
              <Button
                variant="light"
                size="sm"
                block
                class="col-xs-11 text-left"
                onClick={() => {
                  {
                    const newList = accounts.map((item) => {
                      if (item.id === account.id) {
                        const updatedItem = {
                          ...item,
                          following: !account.following,
                        };
                        return updatedItem;
                      }
                      return item;
                    });

                    setAccounts(newList);
                  }
                }}
              >
                <div class="col-auto">
                  <Image
                    src={account.pic}
                    roundedCircle
                    height="35px"
                    width="35px"
                    alt="account image"
                  />
                </div>
                {"\t" + account.name}
              </Button>{" "}
            </div>
          ))}
      </div>
      <br />
      <h6 style={{ "font-family": "Verdana" }}>Following</h6>
      <div>
        {accounts
          .filter((a) => a.following)
          .map((account) => (
            <div>
              <Button
                variant="light"
                size="sm"
                block
                onClick={() => {
                  {
                    const newList = accounts.map((item) => {
                      if (item.id === account.id) {
                        const updatedItem = {
                          ...item,
                          following: !account.following,
                        };

                        return updatedItem;
                      }

                      return item;
                    });
                    setAccounts(newList);
                  }
                }}
              >
                <div class="col-auto">
                  <Image
                    // style={{position: 'relative', left: "-40px",  justifyContent: 'left', alignItems: 'left'}}
                    src={account.pic}
                    roundedCircle
                    height="35px"
                    width="35px"
                  />
                </div>
                {"\t" + account.name}
              </Button>{" "}
            </div>
          ))}
      </div>
      <br />
      <h6 style={{ "font-family": "Verdana" }}>Browse</h6>
      #tech #computers <br />
      #electronics #innovation
    </div>
  );
};
