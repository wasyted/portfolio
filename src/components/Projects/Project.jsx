import Image from "next/image"

export default function Project({ 
  projectName, 
  imageAltText, 
  imageWidth, 
  imageHeight, 
  projectImage, 
  liveVersionLink, 
  aboutProjectLink,
  shortDescription,
  fullWidth
}){
  return(
    <div className={`flex-1 bg-white rounded-lg p-4 mt-5 ${fullWidth ? 'min-w-full' : ''}`}>
      <div>
        <h1 className="font-bold text-xl h-max text-black">
          {projectName}
        </h1>
      </div>
      <div className="overflow-hidden p-2 flex items-center justify-center min-h-384px">
        <Image priority alt={imageAltText} width={imageWidth} height={imageHeight} className="max-h-96 w-auto" src={projectImage}></Image>
      </div>
      <div>
        <p className="flex items-center justify-center text-black max-w-sm m-auto mt-3">
          {shortDescription}
        </p>
      </div>
      <div className="flex justify-center items-center gap-4 p-2 pb-0 mt-3">
        <a href={liveVersionLink} target="_blank"  className="text-sm text-center rounded-lg font-bold p-1.5 w-32 bg-black text-white transition ease-in-out delay-500">
          Live version ↗
        </a>
        <a href={aboutProjectLink} className="text-center text-sm text-black p-1.5 w-32">
          About project →
        </a>
      </div>
    </div>
  )
}