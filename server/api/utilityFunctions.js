const filterItems = (items) => {
  return items
    .filter((item) => item.accessInfo.pdf.isAvailable)
    .map((item) => {
      const volumeInfo = filterVolumeInfo(item.volumeInfo);
      return {
        id: item.id,
        downloadLink: item.accessInfo.pdf.downloadLink,
        volumeInfo,
      };
    });
};

const filterVolumeInfo = (volumeInfo) => {
  const { title, subtitle, authors, pageCount, categories, imageLinks } =
    volumeInfo;
  return {
    title,
    subtitle,
    authors,
    pageCount,
    categories,
    imageLinks,
  };
};

module.exports = {
  filterItems,
};
