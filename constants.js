import { Metadata } from 'next';
export const socials = [
  {
    id: 1,
    url: 'https://twitter.com/yaygha',
    handle: '@yaygha',
  },
];

const title = 'The Gospel of Yehgha';
const description = 'Will come backt to this';

export const metaData = {
  icons: {
    icon: '/icon.png',
  },
  title: title,
  description: description,
  openGraph: {
    title,
    description,
    url: '',
    siteName: 'Gospel of Yehgha Newsletter',
    locale: 'en-US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: title,
    description: description,
    card: 'summary_large_image',
    creator: '@yaygha',
  },
};
