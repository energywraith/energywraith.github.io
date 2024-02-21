export default function convertAsteriskToStrongTag(str: string) {
  const replaceTripleAsteriskString = str.replace(
    /\*{3}(.*?)\*{3}/g,
    `<strong class="text-pink-600">$1</strong>`
  );

  const replacedDoubleAsteriskString = replaceTripleAsteriskString.replace(
    /\*{2}(.*?)\*{2}/g,
    `<strong>$1</strong>`
  );

  return replacedDoubleAsteriskString;
}
