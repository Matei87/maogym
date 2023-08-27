import { ClassTypeProps, BenefitTypeProps } from './types';
import image1 from '@/assets/image1.png';
import image2 from '@/assets/image2.png';
import image3 from '@/assets/image3.png';
import image4 from '@/assets/image4.png';
import image5 from '@/assets/image5.png';
import image6 from '@/assets/image6.png';
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from '@heroicons/react/24/solid';

export const classes: Array<ClassTypeProps> = [
  {
    name: 'Weight Training Classes',
    description: `Regular physical activity can improve your muscle strength and increase your endurance.
    Bodybuilding means confidence in your own strength, helping you move with greater confidence towards your goals.`,
    image: image1,
  },
  {
    name: 'Yoga Classes',
    description: `Are you fascinated by this ancient practice?
    Find out all its health benefits in Yoga classes held for any level of training and you will understand why an ancient practice has remained so relevant even in our times!`,
    image: image2,
  },
  {
    name: 'Ab Core Classes',
    description:
      'A personal trainer will customize your workouts so that you get the results you want as quickly as possible.',
    image: image3,
  },
  {
    name: 'Adventure Classes',
    description: `Adventure Class offer comfortable seating and large picture windows.
    Adventure Class guests are encouraged to give their best, whether to take advantage of the open seating in our Vista Dome or visit the Wilderness Café.`,
    image: image4,
  },
  {
    name: 'Fitness Classes',
    description: `Regular physical activity can improve your muscle strength and increase your endurance.
    Bodybuilding means confidence in your own strength, helping you move with greater confidence towards your goals.`,
    image: image5,
  },
  {
    name: 'Training Classes',
    description: `Both the trainer and fellow participants are there to support and assist you throughout the entire training session.
    This support group may be just what you need to motivate you, push you a little further, and reach your health and fitness goals.`,
    image: image6,
  },
];

export const benefits: Array<BenefitTypeProps> = [
  {
    icon: <HomeModernIcon className='h-6 w-6' />,
    title: 'State of the Art Facilities',
    description:
      'We provide great facilities and personalized sports, through which accomplish your goals.',
  },
  {
    icon: <UserGroupIcon className='h-6 w-6' />,
    title: "100's of Diverse Classes",
    description:
      'We help you fall in love with sport and connect with your body, through complete physical training.',
  },
  {
    icon: <AcademicCapIcon className='h-6 w-6' />,
    title: 'Expert and Pro Trainers',
    description:
      'We stand by your side on your journey to health through sport! With us you always get the results you want.',
  },
];
