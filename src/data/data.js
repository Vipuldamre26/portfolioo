import imgUrl1 from '../assets/about01.png';
import imgUrl2 from '../assets/about02.png';
import imgUrl3 from '../assets/about03.png';
import imgUrl4 from '../assets/about04.png';
import imgUrl5 from '../assets/about05.jpg';
import imgUrl6 from '../assets/about06.jpg';

import skill1 from '../assets/react.png';
import skill2 from '../assets/redux.png';
import skill3 from '../assets/javascript.png';
import skill4 from '../assets/mu5.png';
import skill5 from '../assets/html.png';
import skill6 from '../assets/css.png';
import skill7 from '../assets/git.png';
import skill8 from '../assets/figma.png';
import skill9 from '../assets/sass.png';
import skill10 from '../assets/cpp.png';


import { images } from '../constants';


const abouts = [
    {
      title: 'Web Development',
      description: 'As a web developer, I specialize in creating dynamic, responsive websites with a focus on user experience and modern design principles.',
      imgUrl: images.about01,
    },
    {
      title: 'UI/UX',
      description: 'As a UI/UX developer, I craft intuitive and visually compelling user interfaces, ensuring seamless interactions and a delightful user experience. ',
      imgUrl: images.about02,
    },
    {
      title: 'Frontend Development',
      description: 'As a frontend developer, I build web interfaces using cutting-edge technologies. My focus is on delivering clean, efficient, and maintainable code.',
      imgUrl: images.about03,
    },
    {
      title: 'Web Animations',
      description: 'As a web animator, I bring websites to life with captivating animations that enhance user engagement. Utilizing advanced animation techniques.',
      imgUrl: images.about04,
    },
  ]

const projects = [
    {
        id: 1,
        title: 'Crypto Analyser',
        description: '',
        imgUrl: imgUrl1,
        projectLink: 'https://crypto-app-three-livid.vercel.app/',
        codeLink: 'https://github.com/Vipuldamre26/Crypto_App',
        tags: ['React JS'],
    },
    {
        id: 2,
        title: 'Sticky Notes',
        description: '',
        imgUrl: imgUrl2,
        projectLink: 'https://vipuldamre26.github.io/Sticky_Notes/',
        codeLink: 'https://github.com/Vipuldamre26/Sticky_Notes',
        tags: ['JavaScript'],
    },
    {
        id: 3,
        title: 'Warehouse',
        description: '',
        imgUrl: imgUrl3,
        projectLink: 'https://ware-house-project.vercel.app/',
        codeLink: 'https://github.com/Vipuldamre26/WareHouse_Project',
        tags: ['React JS'],
    },
    {
        id: 4,
        title: 'Amazon Clone',
        description: '',
        imgUrl: imgUrl4,
        projectLink: 'https://alex21c.github.io/AmazonClone/homepage/index.html',
        codeLink: 'https://github.com/Alex21c/AmazonClone',
        tags: ['UI/UX'],
    },
    {
        id: 5,
        title: 'Image Search Web App',
        description: '',
        imgUrl: imgUrl5,
        projectLink: 'https://vipuldamre26.github.io/image_Search_App/',
        codeLink: 'https://github.com/Vipuldamre26/image_Search_App',
        tags: ['JavaScript'],
    },
    {
        id: 6,
        title: 'Text Utils',
        description: '',
        imgUrl: imgUrl6,
        projectLink: 'https://text-utils-project.vercel.app/',
        codeLink: 'https://github.com/Vipuldamre26/textUtils_Project',
        tags: ['React JS'],
    },
]


const skills = [
    {
        id: 1,
        name: 'React',
        img: skill1,
    },
    {
        id: 2,
        name: 'Redux',
        img: skill2,
    },
    {
        id: 3,
        name: 'JavaScript',
        img: skill3,
    },
    {
        id: 4,
        name: 'Material UI',
        img: skill4,
    },
    {
        id: 5,
        name: 'HTML5',
        img: skill5,
    },
    {
        id: 6,
        name: 'CSS3',
        img: skill6,
    },
    {
        id: 7,
        name: 'Git and GitHub',
        img: skill7,
    },
    {
        id: 8,
        name: 'Figma',
        img: skill8,
    },
    {
        id: 9,
        name: 'SASS',
        img: skill9,
    },
    // {
    //     id: 10,
    //     name: 'CPP',
    //     img: skill10,
    // },
]

export default { abouts, projects, skills };