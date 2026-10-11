'use client';

import React from 'react';

export function ReviewSkeleton() {
  return (
    <div className="space-y-6 animate-pulse select-none">
      {/* 1. Header Skeleton */}
      <div className="bg-[#0a3240]/80 border border-[#17424f] rounded-xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-3 flex-1">
          <div className="w-48 h-5 bg-[#0f3947] rounded-full" />
          <div className="w-80 h-8 bg-[#0f3947] rounded-lg" />
          <div className="w-full max-w-xl h-4 bg-[#0f3947] rounded-md" />
        </div>
        <div className="flex gap-3">
          <div className="w-28 h-10 bg-[#0f3947] rounded-lg" />
          <div className="w-36 h-10 bg-[#0f3947] rounded-lg" />
        </div>
      </div>

      {/* 2. 5-Tier Pyramid Skeleton */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-3.5">
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="p-4 rounded-xl border border-[#17424f] bg-[#0a3240]/60 space-y-3">
            <div className="w-20 h-3 bg-[#0f3947] rounded-md" />
            <div className="w-12 h-7 bg-[#0f3947] rounded-md" />
          </div>
        ))}
      </div>

      {/* 3. FSRS Graph Skeleton */}
      <div className="bg-[#0a3240]/80 border border-[#17424f] rounded-2xl p-6 h-64 flex flex-col justify-between">
        <div className="flex justify-between items-center">
          <div className="w-40 h-5 bg-[#0f3947] rounded-md" />
          <div className="flex gap-2">
            <div className="w-20 h-6 bg-[#0f3947] rounded-lg" />
            <div className="w-20 h-6 bg-[#0f3947] rounded-lg" />
          </div>
        </div>
        <div className="w-full h-32 bg-[#051b22] border border-[#17424f] rounded-xl" />
      </div>

      {/* 4. Active Cards Grid Skeleton */}
      <div className="space-y-3">
        <div className="w-48 h-4 bg-[#0f3947] rounded-md" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="bg-[#0a3240]/60 border border-[#17424f] p-4 rounded-2xl space-y-2">
              <div className="w-16 h-3 bg-[#0f3947] rounded-md" />
              <div className="w-24 h-6 bg-[#0f3947] rounded-md" />
              <div className="w-32 h-3 bg-[#0f3947] rounded-md" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
