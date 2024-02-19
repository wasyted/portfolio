'use client'

export default function ScrollToTopButton({scrollTarget}){
  return(
    <a href={scrollTarget} className="z-50 flex items-center justify-center fixed bottom-2 right-4 w-10 h-10 rounded-full bg-black text-white">
      &uarr;
    </a>
  )
}