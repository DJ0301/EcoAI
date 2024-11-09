import React from 'react'

export const About = () => {
  return (
    <>
      <section 
        className="bg-cover bg-bottom bg-center py-16 px-4 min-h-screen" 
        style={{ backgroundImage: "url('')" }} 
      >
        <div className="mx-auto max-w-screen-xl text-center lg:px-12">
          <h2 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            About Us
          </h2>
          <p className="mb-8 text-lg font-normal text-gray-900 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
            We are a company committed to bringing innovative solutions to our customers. Our mission is to create value and make a meaningful impact in the world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Flowbite Block 1 */}
          <div className="flex justify-center items-center">
            <div className="max-w-xs rounded-lg bg-white shadow-lg dark:bg-gray-800">
              <img
                src="https://images.unsplash.com/photo-1681418657841-b01b9837da78?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZWNvJTIwZnJpZW5kbHklMjBwcm9kdWN0fGVufDB8fDB8fHwy"
                alt="About Image"
                className="w-full rounded-t-lg"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
                  Our Vision
                </h3>
                <p className="mt-4 text-gray-500 dark:text-gray-400">
                  We aim to revolutionize industries through cutting-edge technology, helping businesses thrive and make impactful decisions.
                </p>
              </div>
            </div>
          </div>

          {/* Flowbite Block 2 */}
          <div className="flex justify-center items-center">
            <div className="max-w-xs rounded-lg bg-white shadow-lg dark:bg-gray-800">
              <img
                src="https://images.unsplash.com/photo-1616164744857-1439f3dd5687?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGVjbyUyMGZyaWVuZGx5JTIwcHJvZHVjdHxlbnwwfHwwfHx8Mg%3D%3D"
                alt="About Image"
                className="w-full rounded-t-lg"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
                  Our Values
                </h3>
                <p className="mt-4 text-gray-500 dark:text-gray-400">
                  Integrity, innovation, and impact drive everything we do. Our team is dedicated to providing exceptional solutions with a focus on sustainability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}