'use client';
import { useState, useEffect } from 'react';

export default function Home() {

  return (
    <main className="w-full h-screen flex flex-col">

      <div className="flex-grow p-1 pb-0 flex">
        <div className="flex-grow flex flex-col">
          <div className="flex-grow pb-1">
            <div className="w-full h-full bg-slate-800"></div>
          </div>
          <div className="flex-grow">
            <div className="w-full h-full bg-slate-800"></div>
          </div>
        </div>
        <div className="w-1/2 flex flex-col px-1">
          <div className="h-36 flex pb-1">
            <div className="flex-grow ">
              <div className="w-full h-full bg-slate-800"></div>
            </div>
            <div className="flex-grow px-1 ">
              <div className="w-full h-full bg-slate-800"></div>
            </div>
            <div className="flex-grow">
              <div className="w-full h-full bg-slate-800"></div>
            </div>
          </div>
          <div className="flex-grow bg-slate-800"></div>
        </div>
        <div className="flex-grow flex flex-col">
          <div className="flex-grow pb-1">
            <div className="w-full h-full bg-slate-800"></div>
          </div>
          <div className="h-72">
            <div className="w-full h-full bg-slate-800"></div>
          </div>
        </div>
      </div>
      <div className="w-full min-h-64 p-1 flex ">
        <div className="flex-grow pr-1 ">
          <div className="w-full h-full bg-slate-800"></div>
        </div>
        <div className="flex-grow">
          <div className="w-full h-full bg-slate-800"></div>
        </div>
      </div>
    </main>
  );
}
