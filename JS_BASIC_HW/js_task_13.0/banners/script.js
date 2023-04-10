const pictureChange = document.querySelectorAll(".image-to-show");

function pictureReplacement(array, duration, indexElement) {
  const stopBtn = document.querySelector(".stop");
  const playBtn = document.querySelector(".play");
  stopBtn.addEventListener("click", () => {
    clearInterval(timer);
  });
  playBtn.addEventListener("click", () => {
    clearInterval(timer);
    timer = setInterval(() => {
      array.forEach((el) => el.classList.remove("active"));
      const item = array[indexElement];
      item.classList.add("active");
      console.log(item);
      indexElement++;
      if (indexElement === array.length - 1) {
        indexElement = 0;
      }
    }, duration);
  });
  let timer = setInterval(() => {
    array.forEach((el) => el.classList.remove("active"));
    const item = array[indexElement];
    item.classList.add("active");
    console.log(item);
    indexElement++;
    if (indexElement === array.length - 1) {
      indexElement = 0;
    }
  }, duration);
}

pictureReplacement(pictureChange, 1000, 0);
