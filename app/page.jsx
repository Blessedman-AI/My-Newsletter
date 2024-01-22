'use client';

import MainContent from '@components/MainContent';
import NewsletterForm from '@components/NewsletterForm';

import { SocialMedia } from '@components/SocialLinks';

import '../styles/page.css';
import '../styles/globals.css';

export default function Home() {
  return (
    <main
      className="main bg-[#03040b] flex flex-col items-center 
    mb-8  pt-10 min-h-screen"
    >
      <div className="space-y-1">
        <MainContent />
        <NewsletterForm />
        <SocialMedia />
      </div>
    </main>
  );
}
