'use client'

import React from 'react'

const PlaylistItemSkeleton = () => {
  return (
    <div className="shrink-0 w-28 h-36 rounded-xl p-2 flex flex-col gap-2 animate-pulse bg-black/10">
      {/* Quadrado da imagem */}
      <div className="w-24 h-24 bg-gray-800 rounded-md mx-auto" />

      {/* Linhas de texto */}
      <div className="flex flex-col gap-1 px-1">
        <div className="h-4 bg-gray-700 rounded w-full" />
        <div className="h-3 bg-gray-700 rounded w-3/4" />
      </div>
    </div>
  )
}

export const PlaylistSkeletonList = () => {
  // Criando 5 skeletons com map
  return (
    <div className="flex gap-5 overflow-x-auto scrollbar-hide p-2 w-full h-full">
      <div className="mt-2.5 w-full">
        {/* Skeleton for sentiment */}
        <div className="justify-between flex mb-3">
          <div className="h-4 bg-gray-200 rounded animate-pulse w-32"></div>
          <div className="h-6 bg-gray-200 rounded-full animate-pulse w-20"></div>
        </div>

        {/* Skeleton for general text */}
        <div className="space-y-2 mb-4">
          <div className="h-3 bg-gray-200 rounded animate-pulse w-full"></div>
          <div className="h-3 bg-gray-200 rounded animate-pulse w-4/5"></div>
          <div className="h-3 bg-gray-200 rounded animate-pulse w-3/4"></div>
        </div>

        {/* Loading dots animation */}
        <div className="flex justify-center items-center my-6">
          <div className="flex space-x-1">
            <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce"></div>
            <div
              className="w-2 h-2 bg-blue-600 rounded-full animate-bounce"
              style={{ animationDelay: '0.1s' }}
            ></div>
            <div
              className="w-2 h-2 bg-blue-600 rounded-full animate-bounce"
              style={{ animationDelay: '0.2s' }}
            ></div>
          </div>
          <span className="ml-3 text-sm text-blue-600 font-medium">IA generating...</span>
        </div>
      </div>

    </div>
  )
}
