function getExcerpt(text: string, length: number) {
  return text.length > length - 3 ? text.slice(0, length - 4) + "..." : text;
}

export default getExcerpt;
