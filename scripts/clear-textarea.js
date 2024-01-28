"use strict";

import { $userMessage, $containerTrash, $decode, $encode } from "./dom.js";
import { disableButtons } from "./validate-user-input.js";
import { resetModal } from "./encode-decode.js";

const clearTextarea = function (obj) {
  return obj.val("");
};

const clearGlobal = () => {
  clearTextarea($userMessage);
  disableButtons($decode, $encode);
  resetModal();
};

$containerTrash.click(function (e) {
  clearGlobal();
  e.preventDefault();
});

export { clearGlobal };
