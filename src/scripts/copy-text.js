"use strict";

import { $copy, $modal } from "./dom.js";
import { clearGlobal } from "./clear-textarea.js";

$copy.click(async function (e) {
  try {
    await navigator.clipboard.writeText($modal.text());
    confirm("Deseja copiar para  área de transferência?") === true
      ? clearGlobal()
      : false;
  } catch (error) {
    console.error(error.message);
  } finally {
    e.preventDefault();
  }
});
