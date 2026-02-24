"use client";
import { useState } from 'react';

interface CategoryIconProps {
  icon: string;
  iconImg?: string;
  size?: number;
  className?: string;
}

export default function CategoryIcon({ icon, iconImg, size = 40, className = '' }: CategoryIconProps) {
  const [imgError, setImgError] = useState(false);

  if (iconImg && !imgError) {
    return (
      <img
        src={iconImg}
        alt={icon}
        width={size}
        height={size}
        referrerPolicy="no-referrer"
        onError={() => setImgError(true)}
        className={`object-contain ${className}`}
        style={{ width: size, height: size }}
      />
    );
  }

  // フォールバック: 絵文字
  return (
    <span style={{ fontSize: size * 0.75 }} className={className}>
      {icon}
    </span>
  );
}
