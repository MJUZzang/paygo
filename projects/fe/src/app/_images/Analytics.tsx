import React from "react";

interface AnalyticsProps {
  className?: string;
}

const Analytics: React.FC<AnalyticsProps> = (props) => {
  return (
    <svg
      className={props.className}
      xmlns="http://www.w3.org/2000/svg"
      height="24"
      viewBox="0 -960 960 960"
      width="24"
    >
      <path d="M640-160v-280h160v280H640Zm-240 0v-640h160v640H400Zm-240 0v-440h160v440H160Z" />
    </svg>
  );
};

export default Analytics;
