import React from "react";
import { Button } from "@material-ui/core";

function PaginateButton() {
  return (
    <div className="container__paginates">
      <ul className="paginates">
        {["", "", "", "", ""].map((em, i) => {
          return (
            <li key={i} className="paginate">
              <Button color="primary">{i + 1}</Button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default PaginateButton;
