export default function Footer(){
  return (
    <div className="bg-black w-full py-4 flex justify-center items-center text-xs flex-col gap-4">
      <div>
        <p>
          Props to the creators of the resources i&apos;ve used in this site:
        </p>
        <ul className="list-disc list-inside">
          <li><a href="https://www.flaticon.es/iconos-gratis/javascript" title="javascript iconos">Javascript iconos creados por Freepik - Flaticon</a></li>
          <li><a href="https://www.flaticon.es/iconos-gratis/html-5" title="html 5 iconos">Html 5 iconos creados por Pixel perfect - Flaticon</a></li>
          <li><a href="https://www.flaticon.es/iconos-gratis/css" title="css iconos">Css iconos creados por Pixel perfect - Flaticon</a></li>
        </ul>
      </div>
      <div className="flex flex-col justify-center items-center gap-2">
        <p>This site was made by Matías Wasyluk in 2024</p>
        <a href="#top">Back to top ▲</a>
      </div>
    </div>
  );
};