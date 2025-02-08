export default function makeSlug(str: string) {
  return str.toLowerCase().replace(/\s/g, "-");
}
