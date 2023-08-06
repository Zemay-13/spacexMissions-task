import React from "react";
import ContentLoader from "react-content-loader";

const SkeletonCard = (props) => (
  <ContentLoader
    speed={3}
    width={250}
    height={348}
    viewBox="0 0 250 348"
    backgroundColor="#0c4e64"
    foregroundColor="#245f84"
    {...props}
  >
    <rect x="1" y="3" rx="20" ry="20" width="320" height="341" />
  </ContentLoader>
);

export default SkeletonCard;
