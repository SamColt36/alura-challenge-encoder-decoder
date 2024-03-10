import { $imageMain } from "./dom.js";

const modifyImage = function () {
  const isDarkTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

  return isDarkTheme
    ? $imageMain.prop("src", "./images/image-main-dark.png")
    : $imageMain.attr("src", "./images/image-main.png");
};

modifyImage();
