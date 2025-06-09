import React from 'react'


interface OverlayForLanguageProps {
  children: React.ReactNode;
}
export const OverlayForLanguage = ({ children }: OverlayForLanguageProps) => {
  return (
    <div className='fixed inset-0 bg-black/50 z-50 flex items-center justify-center'>
        {children}
    </div>
  )
}
