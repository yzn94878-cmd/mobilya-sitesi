function sepeteEkle() {
    alert("Ürün sepete eklendi!");
}
const arama = document.getElementById("arama");

arama.addEventListener("keyup", function () {
    console.log(arama.value);
});
const banners = [
    "images/banner4.jpg.jpg",
    "images/banner2.jpg",
    "images/banner3.jpg"
];

let index = 0;

setInterval(function () {
    index++;
    if (index >= banners.length) {
        index = 0;
    }

    document.getElementById("banner").src = banners[index];
}, 3000);