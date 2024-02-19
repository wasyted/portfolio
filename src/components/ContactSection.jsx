'use client'
export default function Contact(){
  return(
    <div id='contact-section' className="font-roboto flex min-h-screen flex-col justify-center items-center gap-10 p-4 pt-0 bg-white pt-10">
      <div className="text-center p-4">
        <h1 className="font-bold text-4xl h-max bg-gradient-to-br text-transparent bg-clip-text from-black to-slate-500">
          Let&apos;s get in touch!
        </h1>
        <p className="dark:text-zinc-600 text-zinc-800 text-xl max-w-sm mt-3">
          Contact me so we can talk about what can I bring to your project.
        </p>
      </div>
      <form className="flex flex-col justify-center items-start gap-4  w-full max-w-lg p-2">
        <div className="flex justify-start items-center gap-4 flex-wrap">
          <label htmlFor="name" className="flex flex-col items-start justify-center gap-2 text-black"><p>Name<span className="text-pink-500"> *</span></p>
            <input type="text" id="name" name="name" required minLength={3} placeholder="Your full name" className="placeholder:text-sm border p-1.5 px-2 rounded-lg"></input>
          </label>
          <label htmlFor="company" className="flex flex-col items-start justify-center gap-2 text-black">Company
            <input type="text" id="company" name="company" minLength={3} placeholder="Company / Organization" className="placeholder:text-sm border p-1.5 px-2 rounded-lg"></input>
          </label>
        </div>
        <label htmlFor="message" className="flex flex-col items-start justify-center gap-2 w-full text-black "><p>Message<span className="text-pink-500"> *</span></p>
          <textarea type="text" id="message" maxLength={1000} minLength={3} name="message" placeholder="Type in your message" rows={8} className="min-w-full placeholder:text-sm resize-none border p-1.5 px-2 rounded-lg"></textarea>
          <p className="text-xs text-end w-full">Max 1000 characters.</p>
        </label>
        <button type='submit' onClick={(event) => {event.preventDefault()}} className="rounded-lg font-bold p-1.5 w-32 bg-gradient-to-br from-black to-slate-600 text-white transition ease-in-out delay-500">
          Submit
        </button>
        <p className="text-sm text-black"><span className="text-pink-500"> *</span> marks required fields.</p>
      </form>
    </div>
  );
};