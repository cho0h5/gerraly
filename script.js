let images = ["images/20200219_155250.jpg", "images/20180803_092009.jpg"];

document.getElementById("prev").addEventListener("click", changeImagePrev);
document.getElementById("next").addEventListener("click", changeImageNext);

let img = document.getElementById("img");

function changeImagePrev() {
  img.src = images[0];
}

function changeImageNext() {
  img.src = images[1];
}

document.addEventListener('keydown', (event) => {
    const keyName = event.key;
  
    // As the user releases the Ctrl key, the key is no longer active,
    // so event.ctrlKey is false.
    if (keyName === "ArrowLeft") {
        changeImagePrev()
    }
    else if(keyName === "ArrowRight") {
        changeImageNext()
    }
  }, false);