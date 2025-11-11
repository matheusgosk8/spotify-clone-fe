"use client";

import Image from "next/image";
import { FiMusic } from "react-icons/fi";

interface MediaCardProps {
  name: string;
  subtitle?: string;
  image?: string;
  onReady?: () => void;
}

export function MediaCard({ name, subtitle, image, onReady }: MediaCardProps) {
  return (
    <div className="shrink-0 w-48 bg-secondary-lighter rounded-xl p-3 hover:bg-secondary transition-colors cursor-pointer">
      <div className="relative w-full h-48 rounded-md overflow-hidden mb-3">
        {image ? (
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
            sizes="192px"
            onLoadingComplete={onReady}
          />
        ) : (
          <div className="w-full h-full bg-accent flex items-center justify-center text-sm text-foreground/60">
            <FiMusic size={40} className="text-foreground/50" />
          </div>
        )}
      </div>
      <h3 className="text-base font-semibold truncate">{name}</h3>
      {subtitle && (
        <p className="text-sm text-accent truncate">{subtitle}</p>
      )}
    </div>
  );
}
