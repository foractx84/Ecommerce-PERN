import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  SendHorizontal,
} from 'lucide-react';

const footerData = {
  brand: {
    logo: 'Exclusive',
    subscribeTitle: 'Subscribe',
    subscribeText: 'Get 10% off your first order',
  },

  support: {
    title: 'Support',
    items: [
      '111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.',
      'exclusive@gmail.com',
      '+88015-88888-9999',
    ],
  },

  account: {
    title: 'Account',
    items: ['My Account', 'Login / Register', 'Cart', 'Wishlist', 'Shop'],
  },

  quickLink: {
    title: 'Quick Link',
    items: ['Privacy Policy', 'Terms Of Use', 'FAQ', 'Contact'],
  },

  downloadApp: {
    title: 'Download App',
    note: 'Save $3 with App New User Only',
  },

  socialLinks: [
    { id: 1, icon: Facebook, href: '#' },
    { id: 2, icon: Twitter, href: '#' },
    { id: 3, icon: Instagram, href: '#' },
    { id: 4, icon: Linkedin, href: '#' },
  ],

  subscribeIcon: SendHorizontal,
};

export default footerData;