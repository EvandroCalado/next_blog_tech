import * as Styled from './styles';

export type HtmlContentProps = {
  html: string;
};

const HtmlContent = ({ html }: HtmlContentProps) => {
  return <Styled.Container dangerouslySetInnerHTML={{ __html: html }} />;
};

export default HtmlContent;
