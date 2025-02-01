export default function Contact() {
  try {
    return (
      <section data-name='contact' id='contact' className='section'>
        <div
          data-name='contact-content'
          className='container mx-auto max-w-2xl'
        >
          <h2
            data-name='contact-title'
            className='text-3xl font-bold mb-6 text-center'
          >
            Contact Me
          </h2>
          <form data-name='contact-form' className='space-y-4'>
            <div>
              <label htmlFor='name' className='block text-gray-700 mb-2'>
                Name
              </label>
              <input
                type='text'
                id='name'
                className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500'
                required
              />
            </div>
            <div>
              <label htmlFor='email' className='block text-gray-700 mb-2'>
                Email
              </label>
              <input
                type='email'
                id='email'
                className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500'
                required
              />
            </div>
            <div>
              <label htmlFor='message' className='block text-gray-700 mb-2'>
                Message
              </label>
              <textarea
                id='message'
                rows={4}
                className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500'
                required
              ></textarea>
            </div>
            <button
              type='submit'
              className='w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors'
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    );
  } catch (error) {
    reportError(error);
    return null;
  }
}
