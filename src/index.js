import { processInput, fetchData } from "./getData.js";
import QRAdapter from "./qrAdapter.js";
import jsQR from "jsqr"
import {defaultStyling, defaultWidth} from "./styling.js"
defaultStyling()

//An adapter implementation for QR reader
const codeReader = new QRAdapter(jsQR);
const getCodeFromData = (imageData) => {
  return codeReader.getCode(imageData.data, imageData.width, imageData.height)
}

const coffeeData = fetchData



const container = document.getElementById("container");
const video = document.querySelector("video");
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

async function getMedia(constraints) {
  let stream = null;
  try {
    const supports = navigator.mediaDevices.getSupportedConstraints()
    console.log(supports)
    stream = await navigator.mediaDevices.getUserMedia(constraints);
    video.srcObject = stream;
  } catch (err) {

  }
}

const startCapture = (options) => {
  window.addEventListener("resize", () => {
    const currentWidth = defaultWidth();
    container.width = currentWidth;
    video.width = currentWidth;
    canvas.width = currentWidth;
    canvas.height = video.getBoundingClientRect().height;
  });

  video.addEventListener("play", async () => {
    canvas.height = video.getBoundingClientRect().height;
    canvas.style.position = "absolute";
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    setTimeout(() => {
      window.requestAnimationFrame(initializeCanvas);
    }, 100);
  });
  getMedia(options);
};

startCapture({ video: true, audio: false });

const initializeCanvas = async () => {
  ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
  const myImageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const code = getCodeFromData(myImageData)
  if (code?.data) {
    processCode(code);
    return;
  }
  window.requestAnimationFrame(initializeCanvas);
};

const displayResults = (code) => {
  const results = document.getElementById("results");
  results.style.width = "auto";
  const text = document.createElement("textarea");
  const button = document.createElement("button");
  results.appendChild(text);
  results.appendChild(button);
  button.value = "New read";
  button.innerText = "New read";
  button.addEventListener("click", () => {
    button.remove();
    video.play();
  });
  text.style.width = "100%";
  text.value = JSON.stringify(JSON.parse(code.data), null, "\t");
  text.disabled = true;
  text.style.height = "300px";
}

const processCode = (code) => {
  console.log("Found QR code", code);
  video.pause();
  displayResults(code)
  processInput(code.data, coffeeData)
};
