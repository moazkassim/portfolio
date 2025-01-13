import Email from "../../../public/email.png";
import Phone from "../../../public/phone.png";
import Location from "../../../public/location.png";
export default function Contact(props) {
  console.log("props ", props);
  return (
    <div className="my-20 flex justify-center">
      <div className="flex w-4/5 flex-col items-center justify-center">
        <h1 className="text-center text-5xl text-white">
          You can contact me through
        </h1>
        <div className="mx-auto flex flex-col">
          <div className="draggable w-full">
            <div className="container mx-auto my-32 flex flex-col items-center gap-16">
              <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                <div className="shadow-main flex flex-col items-center gap-3 rounded-3xl bg-gradient-to-r from-purple-800 to-pink-600 px-8 py-10 text-white">
                  <span>
                    <img src={Email} className="h-10 w-10" />
                  </span>
                  <p className="text-dark-grey-900 text-2xl font-extrabold">
                    Email
                  </p>
                  <p className="text-dark-grey-600 text-base leading-7">
                    Contact us at
                  </p>
                  <a
                    className="text-purple-blue-500 text-lg font-bold"
                    href="mailto: hello@loopple.com"
                  >
                    moazkassim100@gmail.com
                  </a>
                </div>
                <div className="shadow-main flex flex-col items-center gap-3 rounded-3xl bg-gradient-to-r from-pink-600 to-pink-600 px-8 py-10 text-white">
                  <span>
                    <img src={Phone} className="h-10 w-10" />
                  </span>
                  <p className="text-dark-grey-900 text-2xl font-extrabold">
                    Phone
                  </p>
                  <p className="text-dark-grey-600 text-base leading-7">
                    Reach out to us by phone
                  </p>
                  <a
                    className="text-purple-blue-500 text-lg font-bold"
                    href="tel:+516-486-5135"
                  >
                    +20 01030951033
                  </a>
                </div>
                <div className="shadow-main flex flex-col items-center gap-3 rounded-3xl bg-gradient-to-r from-pink-600 to-purple-800 px-8 py-10 text-white">
                  <span>
                    <img src={Location} className="h-10 w-10" />
                  </span>
                  <p className="text-dark-grey-900 text-2xl font-extrabold">
                    Location
                  </p>
                  <p className="text-dark-grey-600 text-base leading-7">
                    Find us at home
                  </p>
                  <a
                    className="text-purple-blue-500 text-lg font-bold"
                    target="_blank"
                    href="https://goo.gl/maps/QcWzYETAh4FS3KTD7"
                  >
                    Cairo, Egypt
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
