'use client';

import Image from 'next/image';
import MainContent from '@components/MainContent';
import NewsletterForm from '@components/NewsletterForm';
import '../styles/page.css';
import '../styles/globals.css';

export default function Home() {
  return (
    <main className="main bg-[#03040b] flex flex-col items-center justify-center p-2 min-h-screen">
      <div className="space-y-1">
        <MainContent />
        <NewsletterForm />
      </div>
    </main>
  );
}