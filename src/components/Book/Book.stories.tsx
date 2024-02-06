import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Book from './Book';

const meta: Meta<typeof Book> = {
  component: Book,
  title: 'Sensoreal/Book',
  argTypes: {},
  tags: [ 'autodocs' ],
  parameters: { layout: 'centered' },
};
export default meta;

type Story = StoryObj<typeof Book>;

export const Regular: Story = args => (
  <div style={ { width: '30vw' } }>
    <Book { ...args } />
  </div>
);

Regular.args = { cover: 'https://pictures.abebooks.com/inventory/md/md30869329205.jpg' };

export const CustomCoverAndContent: Story = args => (
  <div style={ { width: '10rem' } }>
    <Book { ...args } />
  </div>
);
CustomCoverAndContent.args = {
  transitionDuration: '400ms',
  transitionTimingFunction: 'ease-out',
  coverColor: '#ac7244',
  coverEndAngle: 45,
  coverContent: <div style={ { color: 'rgba(255,255,255,.85)', fontWeight: '900', fontFamily: 'sans-serif', filter: 'drop-shadow(0px -1px 0px rgba(0,0,0,.5))' } }>
		Lorem Ipsum
  </div>,
  pageContent: <div style={ { color: '#333', fontSize: '.35rem', padding: '2rem 1rem' } }>
    <div style={ { textAlign: 'center', fontSize: '.75rem', fontWeight: 'bolder' } }>Duis aute</div>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum nunc aliquet bibendum enim facilisis. Orci eu lobortis elementum nibh. Eget felis eget nunc lobortis mattis aliquam faucibus purus. Sit amet aliquam id diam. Tincidunt lobortis feugiat vivamus at augue eget. Id interdum velit laoreet id donec ultrices tincidunt. Tempor id eu nisl nunc mi. Eu augue ut lectus arcu bibendum. In pellentesque massa placerat duis.</p>
    <p>Est ante in nibh mauris cursus. Aliquet bibendum enim facilisis gravida neque convallis a cras semper. Massa tincidunt dui ut ornare. Sed nisi lacus sed viverra tellus in hac habitasse. Pellentesque eu tincidunt tortor aliquam. Suspendisse faucibus interdum posuere lorem ipsum. Eu lobortis elementum nibh tellus molestie. Elit at imperdiet dui accumsan sit amet. Faucibus scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam. Mattis pellentesque id nibh tortor id aliquet. Adipiscing bibendum est ultricies integer quis auctor elit.</p>
  </div>,
};