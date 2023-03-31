import { Meta, Story } from '@storybook/react/types-6-0';
import LogoLink, { LogoLinkProps } from '.';

export default {
  title: 'LogoLink',
  component: LogoLink,
  args: {
    text: 'LogoLink',
    image:
      'https://res.cloudinary.com/dnhsdenji/image/upload/v1679924887/110628201_ae0753864b.jpg',
    link: 'https://google.com.br',
    newTab: false,
  },
} as Meta;

export const ImageOnly: Story<LogoLinkProps> = (args) => {
  return (
    <div>
      <LogoLink {...args} />
    </div>
  );
};

export const TextOnly: Story<LogoLinkProps> = (args) => {
  return (
    <div>
      <LogoLink {...args} />
    </div>
  );
};

TextOnly.args = {
  image: '',
};
