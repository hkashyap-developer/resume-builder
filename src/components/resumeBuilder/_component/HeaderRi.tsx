import React from "react";

interface HeadingRIInterface {
  text: string;
  span?: React.ReactNode;
}

export default function HeadingRI({ text, span }: HeadingRIInterface) {
  return (
    <h2 className="text-start text-2xl capitalize">
      {text ? text : "Fill all the details to Continue"}
      {span ? span : null}
    </h2>
  );
}
