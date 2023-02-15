import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = (props) => (
  <ContentLoader
    speed={2}
    width={280}
    height={460}
    viewBox="0 0 280 460"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="136" cy="128" r="124" />
    <rect x="0" y="265" rx="16" ry="16" width="280" height="32" />
    <rect x="-2" y="316" rx="16" ry="16" width="280" height="66" />
    <rect x="11" y="404" rx="16" ry="16" width="95" height="30" />
    <rect x="124" y="398" rx="20" ry="20" width="152" height="45" />
  </ContentLoader>
);

export default Skeleton;
