// SF banner animations
let clouds = document.querySelectorAll("#Clouds path");
let birds = document.querySelectorAll("#Birds path");
let cloudBox = document.querySelector("#cloud-box path");
let birdBox = document.querySelector("#bird-box path");

function float(event) {
  const clientX = event.clientX;
  // loop over clouds
  clouds.forEach((cloud) => {
    // getBoundingClientRect for each cloud
    const cloudBounds = cloud.getBoundingClientRect();
    // determine left or right move
    const left = clientX < cloudBounds.x + cloudBounds.width / 2;
    if (left) {
      cloud.style["transition"] = "transform 4s linear";
      cloud.style["transform"] = "translateX(2%)";
    } else {
      cloud.style["transition"] = "transform 4s linear";
      cloud.style["transform"] = "translateX(-2%)";
    }
  });
}

function fly(event) {
  const clientX = event.clientX;
  birds.forEach((bird) => {
    bird.style["transition"] = "transform 3s linear";
    bird.style["transform"] = "translateX(-9%) translateY(-3%)";
  });
}

console.log({ cloudBox });
cloudBox.addEventListener("mousemove", float, false);
birdBox.addEventListener("mouseover", fly, false);
