import { processInput, fetchData } from "./getData.js";
import QRAdapter from "./qr-adapter.js";

//An adapter implementation for QR reader
const codeReader = new QRAdapter(jsQR);

const coffeeData = fetchData

const defaultWidth = () => {
  if (window.innerWidth < 600) {
    return window.innerWidth;
  } else {
    return 600;
  }
};
const currentWidth = defaultWidth();

const container = document.getElementById("container");
container.style.width = currentWidth;
container.style.display = "flex";
container.style.justifyContent = "center";
container.style.alignItems = "center";
container.style.flexDirection = "column";

const video = document.querySelector("video");
video.width = currentWidth;

const canvas = document.querySelector("canvas");
canvas.width = currentWidth;
canvas.height = video.getBoundingClientRect().height;

const ctx = canvas.getContext("2d");

async function getMedia(constraints) {
  let stream = null;
  try {
    stream = await navigator.mediaDevices.getUserMedia(constraints);
    video.srcObject = stream;
  } catch (err) {}
}

const startCapture = () => {
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
  getMedia({ video: true });
};

startCapture();

const initializeCanvas = async () => {
  ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
  const myImageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const code = codeReader.getCode(
    myImageData.data,
    myImageData.width,
    myImageData.height
  );
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
