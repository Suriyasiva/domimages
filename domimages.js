// show iamges using dom
var image1="https://cdn3.dpmag.com/2021/07/Landscape-Tips-Mike-Mezeul-II.jpg";
var image2="https://photographylife.com/wp-content/uploads/2016/06/Mass.jpg";
var image3="https://i.natgeofe.com/n/2a832501-483e-422f-985c-0e93757b7d84/6.jpg";
var image4="https://cache.desktopnexus.com/thumbseg/1757/1757296-bigthumbnail.jpg";
var image5="https://cache.desktopnexus.com/thumbseg/1252/1252178-bigthumbnail.jpg";

var imagesholder=[image1,image2,image3,image4,image5];

for (const images of imagesholder) {
    var img=document.createElement("img");
    img.setAttribute("src",images)
    img.setAttribute("class","imgsize")
    document.body.append(img)

}
 


// for (let index = 0; index < imagesholder.length; index++) {
//     var img=document.createElement("img");
//     img.setAttribute("src",imagesholder[index])
//     img.setAttribute("class","imgsize")
//     document.body.append(img)
// }