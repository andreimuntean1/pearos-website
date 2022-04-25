import Head from 'next/head'

function Loader() {
  return (
    <>
      <Head>
        <title>pearOS - Loading...</title>
      </Head>

      <div className='absolute w-full h-screen top-0 flex items-center justify-center bg-dark-gray'>
        <span className='loader'></span>
      </div>
    </>
  )
}

export default Loader;