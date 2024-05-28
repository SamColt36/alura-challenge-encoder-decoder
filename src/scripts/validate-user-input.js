"use strict";
import $ from "jquery";

import { $userMessage, $decode, $encode } from "./dom.js";

const regex = /[A-Z|àèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕ]/;

const disableButtons = function () {
  $(arguments).each(function (_, element) {
    element
      .attr("disabled", "disabled")
      .addClass("cursor-no-drop")
      .removeClass("cursor-pointer");
  });
  $userMessage.attr("data", "validation-false");
};

const activateButtons = function () {
  $(arguments).each(function (_, element) {
    element
      .removeAttr("disabled")
      .removeClass("cursor-no-drop")
      .addClass("cursor-pointer");
  });
  $userMessage.attr("data", "validation-true");
};

$userMessage.on("input", function (e) {
  const value = $(this).val().trim();

  regex.test(value) || !Boolean(value)
    ? disableButtons($decode, $encode)
    : activateButtons($decode, $encode);

  e.preventDefault();
});

export { disableButtons };
