"use client";
import { useState } from 'react';

export default function TrophyIcon() {
  const [error, setError] = useState(false);
  if (error) return <span className="text-2xl">🏆</span>;
  return (
    <img
      src="/icons/trophy.png"
      alt="スコア"
      width={36}
      height={36}
      className="object-contain"
      referrerPolicy="no-referrer"
      onError={() => setError(true)}
    />
  );
}
