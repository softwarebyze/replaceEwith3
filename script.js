replaceE(document.body);

function replaceE(element) {
  if (element.hasChildNodes()) {
    element.childNodes.forEach(replaceE);
  } else if (element.nodeType === Text.TEXT_NODE) {
    element.textContent = element.textContent.replace(/E/g, "3");
  }
}
