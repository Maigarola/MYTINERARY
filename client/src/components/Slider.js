import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';

const items = [
  {
    src: 'https://www.premiumsuitehotels.com/wp-content/uploads/2017/12/Par-Guell-1.jpg',
    altText: 'Par Guell',
    caption: '',
    key: '1'
  },
  {
    src: 'https://cdn.getyourguide.com/img/tour_img-1294407-146.jpg',
    altText: 'Eiffel',
    caption: '',
    key: '2'
  },
  {
    src: 'http://www.italia.it/fileadmin/src/img/gallery/regioni/lazio/Colosseo_Roma_Lazio_GettyImages-604355070.jpg',
    altText: 'Roma',
    caption: '',
    key: '3'
  }
];

const Example = () => <UncontrolledCarousel items={items} />;

export default Example;