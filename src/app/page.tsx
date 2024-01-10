import Head from 'next/head';
import Script from 'next/script'


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between">
      <Head>
        <script src="https://getlaunchlist.com/js/widget.js" defer></script>
      </Head>

      <div className="flex flex-col justify-start align-start w-[100%] mt-[5rem]">
        <div className="sm:w-[80%] self-center xsm:w-[100%]">
         <div className="flex flex-col justify-center px-[1.35rem] ">
            <h1 className="sm:text-[63px] xsm:text-[45px] font-[800] m-0 text-[#171717] sm:w-[80%] xsm:w-[100%] self-center text-center sm:leading-[4rem] xsm:leading-[3.5rem] xsm:mr-4 sm:mr-0">Convert visiting leads to <span className='text-[#0F9D58]'>permanent</span> customers</h1>
            <p className=" text-[16px] text-[#434649] leading-[1.6rem] pb-[1.5rem] w-[75%] self-center text-center mt-[1.5rem]"> Communicating with prospective customers can be a lot easier. With a mixture of human brilliance and AI sophistication, copyforest helps you find the right voice to share your values and convince your leads to choose you.</p>
            <p className="text-center pb-[1rem] pt-[0.35rem] font-[700] text-[18px]"> Features to expect:</p>
         </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xsm:grid-cols-1 gap-6 py-[0.35rem] self-center ml-[3rem] xsm:ml-0 xsm:px-[2rem]">
            <span className="flex gap-2 my-2 ml-3 justify-start align-middle"><svg xmlns="http://www.w3.org/2000/svg" fill="#0F9D58" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
              </svg>
              <p className="text-[rgb(15 23 42)] text-[#434649]"> Web and Email copies </p>
            </span>

            <span className="flex gap-2 my-2 ml-3 justify-start align-middle"><svg xmlns="http://www.w3.org/2000/svg" fill="#0F9D58" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
              </svg>
              <p className="text-[rgb(15 23 42)] text-[#434649]"> Copy library from top 1000+ companies </p>
            </span>

            <span className="flex gap-2 my-2 ml-3 justify-start align-middle"><svg xmlns="http://www.w3.org/2000/svg" fill="#0F9D58" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
              </svg>
              <p className="text-[rgb(15 23 42)] text-[#434649]"> Professionally crafted templates </p>
            </span>

            <span className="flex gap-2 my-2 ml-3 justify-start align-middle"><svg xmlns="http://www.w3.org/2000/svg" fill="#0F9D58" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
              </svg>
              <p className="text-[rgb(15 23 42)] text-[#434649]"> AI assistance for idea generation and content formatting </p>
            </span>

            <span className="flex gap-2 my-2 ml-3 justify-start align-middle"><svg xmlns="http://www.w3.org/2000/svg" fill="#0F9D58" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
              </svg>
              <p className="text-[rgb(15 23 42)] text-[#434649]"> SEO enhancement </p>
            </span>

            <span className="flex gap-2 my- 2 ml-3 justify-start align-middle"><svg xmlns="http://www.w3.org/2000/svg" fill="#0F9D58" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
              </svg>
              <p className="text-[rgb(15 23 42)] text-[#434649]"> Content localization</p>
            </span>
          </div>
        </div>

      <div className=' w-[80%] self-center mt-[4rem] ml-[1.7rem] text-center'>
      <p className="text-[16px]">Join our waitlist to be one of the first 50 users to experience this life changing innovation for FREE</p>
      <div className="launchlist-widget" data-key-id="ZOck3v" data-height="180px"></div>
      </div>
      </div>
  
      <Script src="https://getlaunchlist.com/js/widget.js" defer></Script>
    </main>
  )
}
