import {
  Smartphone,
  Monitor,
  Watch,
  Camera,
  Headphones,
  Gamepad2,
} from 'lucide-react';

const categories = [
  { id: 1, title: 'Phones', icon: Smartphone, active: false },
  { id: 2, title: 'Computers', icon: Monitor, active: false },
  { id: 3, title: 'SmartWatch', icon: Watch, active: false },
  { id: 4, title: 'Camera', icon: Camera, active: true },
  { id: 5, title: 'HeadPhones', icon: Headphones, active: false },
  { id: 6, title: 'Gaming', icon: Gamepad2, active: false },
];

export default categories;