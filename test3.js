let testUrls = [
  "https://cdn.shopify.com/e.jpg?v=15",
  "https://cdn.shopify.com/e_100x200.jpg?v=15",
  "https://cdn.shopify.com/e-jpg_200x100.jpg?v=15",
];
let sizeString = "100x";

let replaceSize = (sizeString, url) => {
  const existedSizeStringPatern =
    "W*_([0-9]+x|x[0-9]+|[0-9]+x[0-9]+).(?:jpg|gif|png|webp)";

  const extensionPatern = ".(?:jpg|gif|png|webp)";

  let matchResult = url.match(existedSizeStringPatern);
  if (matchResult) {
    return url.replace(matchResult[0], `_${sizeString}.jpg`);
  }

  matchResult = url.match(extensionPatern);
  return insertAtIndex(url, `_${sizeString}`, matchResult.index);
};

let insertAtIndex = (str, substring, index) => {
  return str.slice(0, index) + substring + str.slice(index);
};

testUrls.forEach(testUrl => {
    console.log(replaceSize(sizeString, testUrl));
});
