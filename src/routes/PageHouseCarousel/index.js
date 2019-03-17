import React from "react";
import { withRouter } from "react-router-dom";
import HouseCarousel from "@components/HouseCarousel"
const PageHouseCarousel = props => {
  const level = props.location.search.slice(7);
  return (
    <div className="container">
      <HouseCarousel currLevel={Number(level)} />
    </div>
  )
}

export default withRouter(PageHouseCarousel);