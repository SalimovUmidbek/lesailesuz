import { useState } from "react";

const Login = ({ tel }) => {
  const [telNum, setTelNum] = useState("+998");
  const getPhoneNum = () => {

    
    let cuttedPhoneNum = telNum.slice(1);
    let isNum = /^\d+$/.test(cuttedPhoneNum);

    if (!isNum) {
      alert("Iltimos telefon raqam kiriting");
      return 0;
    } else if (cuttedPhoneNum.length != 12) {
      alert("Iltimos telefon raqam kiriting");
      return 0;
    }

    tel(true)
  };

  const change = (event) => {
    event.preventDefault();
    setTelNum(event.target.value);
  };

  return (
    <section>
      <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              <span className="text-[#fc004a]">Les Ailes</span> ga Xush kelibsiz
            </h1>
            <form class="space-y-4 md:space-y-6" action="#">
              <div>
                <label
                  for="phone"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Telefon Raqamingizni Kiriting
                </label>
                <input
                  onChange={change}
                  type="tel"
                  name="phone"
                  id="phone"
                  class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="+998 99 987 65 43"
                  required=""
                  value={telNum}
                />
              </div>
              <button
                type="submit"
                onClick={getPhoneNum}
                class="w-full text-dark bg-success-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 bg-[#fc004a] text-white"
              >
                Kirish
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
