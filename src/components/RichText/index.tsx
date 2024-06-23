import HtmlParser from 'react-html-parser'

const RichText = ({ children }: { children: string }) => {
  return HtmlParser(children)
}

export default RichText
