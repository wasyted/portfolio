export default function Footer(){
  return (
    <div className="bg-black text-white w-full py-4 flex justify-center items-center text-xs flex-col gap-4">
      <div>
        <p>
          Props to the creators of the resources i&apos;ve used in this site.
        </p>
      </div>
      <div className="flex flex-col justify-center items-center gap-2">
        <p>This site was made by Matías Wasyluk in 2024</p>
        <a href="#top">Back to top ▲</a>
      </div>
    </div>
  );
};