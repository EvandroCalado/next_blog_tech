import Footer, { FooterProps } from '.';
import { Meta, Story } from '@storybook/react/types-6-0';

const FooterStories: Meta = {
  title: 'Footer',
  component: Footer,
  args: {
    footerHtml: `<p><a href="https://github.com/EvandroCalado">Feito com 💕 por Evandro Calado</a></p>`,
  },
};

export const Template: Story<FooterProps> = (args) => {
  return (
    <div>
      <Footer {...args} />
    </div>
  );
};

export default FooterStories;
