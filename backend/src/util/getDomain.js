exports.getDomain = (url) => {
  const sourceString = url.replace('http://', '').replace('https://', '').replace('www.', '').split(/[/?#]/)[0];
  return sourceString;
}