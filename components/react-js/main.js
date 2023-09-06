"use strict";

function LikeButton() {
  const [liked, setLiked] = React.useState(false);

  const h1 = React.createElement("h1", null, `${liked}`);

  const button = React.createElement(
    "button",
    { onClick: () => setLiked(!liked) },
    "Like"
  );

  return React.createElement("div", null, h1, button);
}

const rootNode = document.getElementById("app");
const root = ReactDOM.createRoot(rootNode);
root.render(React.createElement(LikeButton));
