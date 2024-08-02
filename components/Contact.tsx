type Contact = {
  id: number;
  type: string;
  value: string;
}

const getContactData = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/contact-details`)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  const data = await res.json()
  return data.docs
}

type OpeningHours = {
  id: number;
  day: string;
  openingTime: string;
  closingTime: string;

}

const getOpeningHours = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/opening-hours`);

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  const data = await res.json()
  return data.docs
}

const Contact = async () => {
  // const data: Contact[] = await getContactData()
  const data: Contact[] = [
    {
      id: 3,
      value: '14-16 High St, Soham, CB7 5HD',
      type: 'address',
    },
    {
      id: 2,
      value: 'info@naz-soham.co.uk',
      type: 'email',
    },
    {
      id: 1,
      value: '(+) 01353 723724',
      type: 'phone',
    }
  ]

  let email = '';
  let phone = '';
  let address = '';

  data.forEach((contact) => {
    if (contact.type === 'email') {
      email = contact.value;
    } else if (contact.type === 'phone') {
      phone = contact.value;
    } else if (contact.type === 'address') {
      address = contact.value;
    }
  });

  // const openingHours: OpeningHours[] = await getOpeningHours()
  const openingHours: OpeningHours[] = [
    {
      id: 2,
      day: 'Mon',
      openingTime: '5PM',
      closingTime: '10PM',
    },
    {
      id: 3,
      day: 'Tue',
      openingTime: '5PM',
      closingTime: '10PM',
    },
    {
      id: 4,
      day: 'Wed',
      openingTime: '5PM',
      closingTime: '10PM',
    },
    {
      id: 5,
      day: 'Thu',
      openingTime: '5PM',
      closingTime: '10PM',
    },
    {
      id: 6,
      day: 'Fri',
      openingTime: '5PM',
      closingTime: '10PM',
    },
    {
      id: 7,
      day: 'Sat',
      openingTime: '5PM',
      closingTime: '10PM',
    },
    {
      id: 8,
      day: 'Sun',
      openingTime: '5PM',
      closingTime: '10PM',
    }
  ]

  return (
    <div id="contact" className="grid lg:grid-cols-2 lg:mb-20">

      {/* Phone, Email, Address & Opening Hours*/}
      <div className="grid gap-4 justify-center items-center bg-[#fafaed] h-full rounded-md tracking-wide">

        <h2 className="text-3xl">How to reach out</h2>

        <div className="grid gap-3">

          {/* Phone */}
          <div className="flex gap-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
              stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
            </svg>
            <a href="" className="hover:cursor-pointer">
              <p>{phone}</p>
            </a>
          </div>

          {/* Email */}
          <div className="flex gap-4">
            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
              stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
            </svg>
            <div className="grid items-center justify-center">
              <a href="" className="hover:cursor-pointer">
                <p>{email}</p>
              </a>
            </div>
          </div>

          {/* Address */}
          <div className="flex gap-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
              stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
            </svg>
            <a href="" className="hover:cursor-pointer">
              <p>{address}</p>
            </a>
          </div>

        </div>


        {/* <!-- Opening Hours --> */}
        <div className="_mx-auto w-56">
          <h2 className="mt-8 mb-2 text-lg">Opening Hours</h2>

          <div>
            {
              openingHours.map((doc: OpeningHours) => {
                return (
                  <p className="flex justify-between gap-3">
                    <span>{doc.day}:</span>
                    <span>{doc.openingTime} - {doc.closingTime}</span>
                  </p>
                )
              })
            }
          </div>
        </div>

      </div>

      {/* <!-- Contact Form --> */}
      <div className="mb-20 lg:mb-0">

        <div className="mt-3 sm:mt-20 lg:mt-0 xl:mt-0 px-10 md:px-0 mx-auto w-full max-w-lg lg:px-8">


          <h2 className="text-3xl mb-4">Send us a Message</h2>
          <form
            action="#"
            method="POST"

          >
            <div className="grid gap-x-8 gap-y-6 sm:grid-cols-2 text-gray-900">

              <div>
                <label className="block text-sm leading-6">First name</label>
                <div className="mt-2.5">
                  <input type="text" name="first-name" id="first-name" autoComplete="given-name"
                    className="block w-full border-1 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6" />
                </div>
              </div>

              <div>
                <label className="block text-sm leading-6">Last name</label>
                <div className="mt-2.5">
                  <input type="text" name="last-name" id="last-name" autoComplete="family-name"
                    className="block w-full border-1 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6" />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label className="block text-sm leading-6">Email</label>
                <div className="mt-2.5">
                  <input type="email" name="email" id="email" autoComplete="email"
                    className="block w-full border-1 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6" />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label className="block text-sm leading-6">Message</label>
                <div className="mt-2.5">
                  <textarea name="message" id="message"
                    rows={3}
                    className="block w-full border-1 px-3.5 py-2 text-gray-400 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"></textarea>
                </div>
              </div>

            </div>

            <div className="mt-10">
              <button type="submit"
                className="block w-full px-3.5 py-2.5 text-center text-sm font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 border-double border-4 border-slate-700 hover:border-slate-600"
              >
                Send Message
              </button>
            </div>
          </form>


        </div>

      </div>

    </div>
  )
}

export default Contact