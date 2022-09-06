import "./styles/main.pcss";
if (process.env.NODE_ENV === "development") {
  require("file-loader!./index.html");
}

// import "./scripts/scroll";
// import "./scripts/welcome-parallax";
// import "./scripts/fullscreen-menu";
// import "./scripts/skills";
// import "./scripts/works";
// import "./scripts/reviews";