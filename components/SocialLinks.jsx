'use client';

import Image from 'next/image';
import { socials } from '@/constants';
import xxIcon from '../public/assets/images/white.png';

const social = socials[0];

function TwitterIcon() {
  return (
    <Image
      src={xxIcon}
      alt="twitter icon"
      width={16}
      height={16}
    />
  );
}

export function SocialMedia() {
  return (
    <div className="flex items-center justify-center">
      <a
        href={social.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div
          className="flex items-center justify-center gap-x-1 flex-shrink-0"
          key={social.id}
        >
          <TwitterIcon />

          <p
            className="text-[#ADB0B1]  hover:text-white
        transition font-medium"
          >
            {social.handle}
          </p>
        </div>
      </a>
    </div>
  );
}
