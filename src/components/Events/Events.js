import React from "react";
import PropTypes from "prop-types";
import moment from "moment";
import { ButtonLink } from "../../common-styles";
import { EventImage, Date, EventHeading } from "./styles";

const FeatureGrid = ({ gridItems }) => (
  <>
    {gridItems.map(item => (
      <div key={item.description}>
        <EventImage
          style={{
            backgroundImage: `url(${
              !!item.image.childImageSharp
                ? item.image.childImageSharp.fluid.src
                : item.image
            })`
          }}
          alt="Horizon Cycling St Joseph, MO Bike Maintenance"
        ></EventImage>
        <Date>{moment(item.date).format("MMM DD")}</Date>
        <EventHeading>{item.title}</EventHeading>
        <p>
          <small>{item.description}</small>
        </p>
        <ButtonLink
          color="gold"
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          View Event
        </ButtonLink>
      </div>
    ))}
  </>
);

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      description: PropTypes.string,
      title: PropTypes.string,
      date: PropTypes.string,
      link: PropTypes.string
    })
  )
};

export default FeatureGrid;
