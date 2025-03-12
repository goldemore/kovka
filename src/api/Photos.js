// Сканирует все файлы .jpg, .png в папке images
const importAll = (requireContext) =>
  requireContext.keys().reduce((images, path) => {
    const imageName = path.replace("./", ""); // Убираем './' из имени файла
    images[imageName] = requireContext(path);
    return images;
  }, {});

const images = importAll(
  require.context("../images/project_img", false, /\.(png|jpe?g|svg)$/)
);

const photos = [
  {
    id: 1,
    name: "Photo 1",
    images: [images["1.jpg"], images["1.jpg"]],
  },
  {
    id: 2,
    name: "Photo 2",
    images: [images["2.jpg"], images["2.jpg"]],
  },
  {
    id: 3,
    name: "Photo 3",
    images: [images["3.jpg"]],
  },
  {
    id: 4,
    name: "Photo 4",
    images: [images["3.jpg"], images["3.jpg"]],
  },
];

export default photos;
