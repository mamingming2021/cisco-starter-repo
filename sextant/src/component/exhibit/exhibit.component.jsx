import React from "react";
import ExhibitCard from "../exhibit-card/exhibit-card.component";

import "./exhibit.component.styles.scss";

const Exhibit = () => {
  return (
    <div className='container'>
      <ExhibitCard></ExhibitCard>
      <ExhibitCard></ExhibitCard>
      <ExhibitCard></ExhibitCard>
    </div>
  );
};

export default Exhibit;
