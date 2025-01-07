export default function ArticleItemDesc(props) {
  // replace <p> -> ''
  // replace </p> -> ''
  // <p>abc</p> -> abc
  const paragraph = props.desc;
  let html = paragraph.replace('<p>', '');
  html = html.replace('</p>', '');
  const array_html = html.split(" ");
  const new_array = array_html.slice(0, 25);
  let new_html = new_array.join(" ");

  return (
    <p>{`${new_html}...`}</p>
  );
}
