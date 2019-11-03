import React from "react";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import { CardVolunteer, PaginateButton } from "./components";

function Volunteers() {
  return (
    <section>
      <GridContainer>
        {[true, true, false, true, false, false, true, true].map(i => (
          <GridItem xs={12} sm={4} md={3}>
            <CardVolunteer avalible={i}></CardVolunteer>
          </GridItem>
        ))}
        <GridItem xs={12} sm={12} md={12}>
          <PaginateButton></PaginateButton>
        </GridItem> 
      </GridContainer>
    </section>
  );
}

export default Volunteers;
