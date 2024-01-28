"use strict";

import {
  $userMessage,
  $decode,
  $encode,
  $modal,
  $copy,
  $messageDefault
} from "./dom.js";

const logicToEncode = (str) => {
  return str
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");
};

const logicToDecode = (str) => {
  return str
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");
};

const coding = (value) => {
  $encode.click(function (e) {
    const message = logicToEncode(value);
    insertTextIntoModal(message);
    e.preventDefault();
  });
};

const decoding = (value) => {
  $decode.click(function (e) {
    const message = logicToDecode(value);
    insertTextIntoModal(message);
    e.preventDefault();
  });
};

const insertTextIntoModal = (message) => {
  $modal.text(message).removeClass("text-center");
  $copy.show();
  $messageDefault.hide();
};

const resetModal = () => {
  $modal
    .text("Digite um texto que você deseja criptografar ou descriptografar.")
    .addClass("text-center");
  $copy.hide();
  $messageDefault.show();
  $userMessage.attr("data", "validation-false");
};

$userMessage.blur(function (e) {
  coding($(this).val().trim());
  decoding($(this).val().trim());
  e.preventDefault();
});

export { resetModal };
