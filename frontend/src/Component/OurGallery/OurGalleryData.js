function importAll(r) {
  let images = [];
  r.keys()
    // .reverse()
    .map((item, index) => {
      images.push({
        id: index + 1,
        img: require(`../../Assets/OurGallery${item.replace("./", "/")}`),
      });
    });
  console.log(images);
  return images;
}

const OurGalleryData = importAll(
  require.context("../../Assets/OurGallery", false, /\.(png|jpe?g|svg)$/)
);

export default OurGalleryData;
