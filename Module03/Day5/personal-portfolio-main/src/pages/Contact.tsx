import {
  EnvelopeIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

import {
  useForm,
  ValidationError,
} from "@formspree/react";

const Contact = () => {
  const [state, handleSubmit] = useForm("xkoaaroz");

  if (state.succeeded) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 px-6">
        <div className="max-w-md w-full bg-white dark:bg-gray-800 p-10 rounded-3xl shadow-xl text-center">

          <div className="text-5xl mb-4">🎉</div>

          <h2 className="text-3xl font-bold text-green-500">
            Message Sent!
          </h2>

          <p className="mt-4 text-gray-600 dark:text-gray-400">
            Thank you for reaching out. I'll get back to you as soon as possible.
          </p>

        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative bg-white dark:bg-gray-900 flex items-center justify-center px-6 py-24">

      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-400/20 blur-3xl rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-400/20 blur-3xl rounded-full"></div>
      </div>

      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10">

        {/* ================= FORM ================= */}
        <div className="bg-white/70 dark:bg-gray-800/60 backdrop-blur-xl border border-gray-200 dark:border-gray-700 rounded-3xl p-8 shadow-xl">

          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
            Contact me
          </h1>
          <form
            onSubmit={handleSubmit}
            className="mt-8 space-y-5"
          >
            <input
              type="text"
              name="name"
              required
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-xl bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />

            <input
              type="email"
              name="email"
              required
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-xl bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />

            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />

            <textarea
              name="message"
              required
              rows={6}
              placeholder="Tell me about your project..."
              className="w-full px-4 py-3 rounded-xl bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
            />

            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />

            <button
              type="submit"
              disabled={state.submitting}
              className="w-full py-3 rounded-xl bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {state.submitting
                ? "Sending..."
                : "Send Message"}
            </button>
          </form>
        </div>

        {/* ================= RIGHT SIDE ================= */}
            
          {/* Contact Info */}
          <div className="bg-white/70 dark:bg-gray-800/60 backdrop-blur-xl border border-gray-200 dark:border-gray-700 rounded-3xl p-6 shadow-xl">

            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-5">
              Contact Information
            </h3>

            <div className="space-y-4">

              <div className="flex items-center gap-3">
                <EnvelopeIcon className="w-5 h-5 text-indigo-500" />

                <a
                  href="mailto:your@email.com"
                  className="text-gray-700 dark:text-gray-300 hover:text-indigo-500 transition"
                >
                  solianaalemayehukinfe@gmail.com
                </a>
              </div>

              <div className="flex items-center gap-3">
                <MapPinIcon className="w-5 h-5 text-indigo-500" />

                <span className="text-gray-700 dark:text-gray-300">
                  Addis Ababa, Ethiopia
                </span>
              </div>

            </div>
          </div>

          {/* Socials */}
          <div className="bg-white/70 dark:bg-gray-800/60 backdrop-blur-xl border border-gray-200 dark:border-gray-700 rounded-3xl p-6 shadow-xl">

            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-5">
              Connect With Me
            </h3>

            <div className="flex flex-wrap gap-3">

              <a
                href="https://github.com/Soliana109/IBT-Codeop"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-gray-900 text-white hover:scale-105 transition"
              >
                GitHub
              </a>
            </div>
          </div>

        </div>
      </div>
  );
};

export default Contact;