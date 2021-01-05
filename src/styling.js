export const defaultStyling = () => {
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

}

export const defaultWidth = () => {
    if (window.innerWidth < 600) {
      return window.innerWidth;
    } else {
      return 600;
    }
  };

  const currentWidth = defaultWidth();