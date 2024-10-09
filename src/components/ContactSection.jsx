'use client'
export default function Contact(){
  return(
    <div id='contact-section' className="shadow-xl flex min-h-screen flex-col justify-center items-center gap-10 p-4 pt-0 text-white bg-gradient-to-t from-blue-800 to-blue-600 pt-10 z-10">
      <div className="text-center p-4">
        <h1 className="font-bold text-4xl h-max bg-gradient-to-br text-transparent bg-clip-text text-white">
          Let&apos;s get in touch!
        </h1>
        <p className="text-zinc-50 text-xl max-w-sm mt-3">
          Contact me so we can talk about what can I bring to your project.
        </p>
      </div>
      <form className="flex flex-col justify-center items-start gap-4 w-full max-w-lg p-2">
        <div className="flex justify-start items-center gap-4 flex-wrap">
          <label htmlFor="name" className="flex flex-col items-start justify-center gap-2 w-full sm:w-auto"><p>Name<span className="text-pink-500"> *</span></p>
            <input type="text" id="name" name="name" required minLength={3} placeholder="Your full name" className="placeholder:text-sm border p-1.5 px-2 placeholder:text-zinc-300 rounded-lg w-full"></input>
          </label>
          <label htmlFor="company" className="flex flex-col items-start justify-center gap-2 w-full sm:w-auto" >Company
            <input type="text" id="company" name="company" minLength={3} placeholder="Company / Organization" className="placeholder:text-sm border p-1.5 px-2 rounded-lg   placeholder:text-zinc-300 w-full"></input>
          </label>
        </div>
        <label htmlFor="email" className="flex flex-col items-start justify-center gap-2 w-full sm:max-w-xs" ><p>Email<span className="text-pink-500"> *</span></p>
            <input type="text" id="email" name="email" minLength={3} placeholder="mail@example.com" className="placeholder:text-sm border p-1.5 px-2 rounded-lg placeholder:text-zinc-300 w-full"></input>
          </label>
        <label htmlFor="message" className="flex flex-col items-start justify-center gap-2 w-full "><p>Message<span className="text-pink-500"> *</span></p>
          <textarea type="text" id="message" maxLength={1000} minLength={3} name="message" placeholder="Type in your message" rows={8} className="min-w-full placeholder:text-sm resize-none border p-1.5 px-2 rounded-lg  placeholder:text-zinc-300"></textarea>
          <p className="text-xs text-end w-full">Max 1000 characters.</p>
        </label>
        <button type='submit' onClick={(event) => {event.preventDefault()}} className="rounded-lg font-bold p-1.5 w-32 bg-gradient-to-br from-black to-slate-600 text-white transition ease-in-out delay-500">
          Submit
        </button>
        <p className="text-sm"><span className="text-pink-500"> *</span> marks required fields.</p>
      </form>
    </div>
  );
};