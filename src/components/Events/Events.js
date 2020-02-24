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
          {/* <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.09 15.59L11.5 17L16.5 12L11.5 7L10.09 8.41L12.67 11H3V13H12.67L10.09 15.59ZM19 3H5C3.89 3 3 3.9 3 5V9H5V5H19V19H5V15H3V19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3Z"
                fill="white"
              />
            </svg> */}
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
      date: PropTypes.instanceOf(Date),
      link: PropTypes.string
    })
  )
};

export default FeatureGrid;
