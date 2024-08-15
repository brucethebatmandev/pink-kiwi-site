import EmailIcon from "./icons/EmailIcon";
import LocationIcon from "./icons/LocationIcon";
import PhoneIcon from "./icons/PhoneIcon";

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
      value: '138 Crwys Rd, Cardiff CF24 4NR',
      type: 'address',
    },
    {
      id: 2,
      value: 'pinkkiwi138@gmail.com',
      type: 'email',
    },
    {
      id: 1,
      value: '07724680384',
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
    <div id="contact" className="grid lg:grid-cols-2 gap-20 lg:gap-0 lg:mb-20 py-10 max-w-md sm:max-w-full px-4 sm:px-0">

      {/*( Phone, Email, Address) & Opening Hours */}
      <div className="grid gap-10 lg:gap-6 justify-center h-full rounded-md tracking-wide">

        <h2 className="text-3xl">How to reach out</h2>

        <div className="grid gap-3">

          {/* Phone */}
          <div className="flex gap-4">
            <PhoneIcon />
            <a href="" className="hover:cursor-pointer">
              <p>{phone}</p>
            </a>
          </div>

          {/* Email */}
          <div className="flex gap-4">
            <EmailIcon />
            <div className="grid items-center justify-center">
              <a href="" className="hover:cursor-pointer">
                <p>{email}</p>
              </a>
            </div>
          </div>

          {/* Address */}
          <div className="flex gap-4">
            <LocationIcon />
            <a href="" className="hover:cursor-pointer">
              <p>{address}</p>
            </a>
          </div>

        </div>


        {/* <!-- Opening Hours --> */}
        <div className="w-56 flex flex-col justify-end">
          <div>
            <h2 className="mb-2 text-lg">Opening Hours</h2>

            <div>
              {
                openingHours.map((doc: OpeningHours, index: number) => {
                  return (
                    <p key={index} className="flex justify-between gap-3">
                      <span>{doc.day}:</span>
                      <span>{doc.openingTime.toLowerCase()} - {doc.closingTime.toLowerCase()}</span>
                    </p>
                  )
                })
              }
            </div>
          </div>

        </div>

      </div>

      {/* <!-- Contact Form --> */}
      <div className="mb-20 lg:mb-0">

        <div className="grid gap-8 lg:gap-12 w-full max-w-md md:max-w-lg px-10 md:px-0 lg:px-8 mx-auto">

          <h2 className="text-3xl text-center lg:text-left">Send us a Message</h2>

          <form action="#" method="POST">
            <div className="grid gap-x-8 gap-y-6 sm:grid-cols-2 text-gray-900 ">

              <div>
                <label className="block text-sm leading-6">First name</label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    className="block w-full border-1 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 rounded-md"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm leading-6">Last name</label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    autoComplete="family-name"
                    className="block w-full border-1 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 rounded-md"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label className="block text-sm leading-6">Email</label>
                <div className="mt-2.5">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    className="block w-full border-1 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 rounded-md"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label className="block text-sm leading-6">Message</label>
                <div className="mt-2.5">
                  <textarea
                    name="message"
                    id="message"
                    rows={3}
                    className="block w-full border-1 px-3.5 py-2 text-gray-400 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 rounded-md"></textarea>
                </div>
              </div>

            </div>

            <div className="mt-10">
              <button
                type="submit"
                className="block w-full px-3.5 py-2.5 text-center text-md font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 rounded-md border bg-black text-white tracking-wide"
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