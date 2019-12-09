import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';

const items = [
  {
    src: 'https://www.premiumsuitehotels.com/wp-content/uploads/2017/12/Par-Guell-1.jpg',
    altText: 'Slide 1',
    caption: 'Slide 1',
    header: 'Slide 1 Header',
    key: '1'
  },
  {
    src: 'https://cdn.getyourguide.com/img/tour_img-1294407-146.jpg',
    altText: 'Slide 2',
    caption: 'Slide 2',
    header: 'Slide 2 Header',
    key: '2'
  },
  {
    src: 'http://www.italia.it/fileadmin/src/img/gallery/regioni/lazio/Colosseo_Roma_Lazio_GettyImages-604355070.jpg',
    altText: 'Slide 3',
    caption: 'Slide 3',
    header: 'Slide 3 Header',
    key: '3'
  }
];

const Example = () => <UncontrolledCarousel items={items} />;

export default Example;