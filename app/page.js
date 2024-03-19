'use client';
import { useState, useEffect } from 'react';

// RainbowKit
import { getDefaultConfig, RainbowKitProvider, ConnectButton } from '@rainbow-me/rainbowkit';
import { WagmiProvider } from 'wagmi';
import { mainnet, polygon, optimism, arbitrum, opBNB } from 'wagmi/chains';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

import '@rainbow-me/rainbowkit/styles.css';

const config = getDefaultConfig({
  appName: 'My RainbowKit App',
  projectId: 'YOUR_PROJECT_ID',
  chains: [mainnet, polygon, optimism, arbitrum, opBNB],
  ssr: true, // If your dApp uses server side rendering (SSR)
});

export default function Home() {
  const queryClient = new QueryClient();
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          <ConnectButton accountStatus={'avatar'} chainStatus={'icon'} showBalance={false} />
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
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
