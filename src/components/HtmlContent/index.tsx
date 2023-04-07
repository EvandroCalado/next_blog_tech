import * as Styled from './styles';
import Prism from 'prismjs';
import { PrismWrapper } from './prism-vscode-dark';
import { useEffect } from 'react';

export type HtmlContentProps = {
  html: string;
};

const HtmlContent = ({ html }: HtmlContentProps) => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <PrismWrapper>
      <Styled.Container dangerouslySetInnerHTML={{ __html: html }} />;
    </PrismWrapper>
  );
};

export default HtmlContent;
