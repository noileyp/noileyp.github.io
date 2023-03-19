var imageThumbs = document.getElementById("image-thumbs");
var currentImage = document.getElementById("current-image");

//I need to change the for loop below to not stop at a hardcoded value but rather the number of photos in the S3 bucket.

for (var i = 1; i <= 7; i++) {
  var thumb = document.createElement("img");
  thumb.src = "https://nkpphotography.s3.amazonaws.com/" + i + ".jpg";
  thumb.alt = "Image " + i;
  thumb.classList.add("thumb");
  imageThumbs.appendChild(thumb);
  thumb.addEventListener(
    "click", function() {
      currentImage.src = this.src;
    }
  );
}