import Footer from 'components/Footer'
import Header from 'components/Header'

function Wrapper({children}) {
  return (
    <>
      <Header />
      <div className='bg-dark-gray w-full overflow-hidden relative'>
        <div className='min-h-screen sm:px-8'>
          {children}
        </div>
        <div className='bg-caribbean-green w-[450px] h-[450px] blur-[175px] opacity-50 top-[600px] left-1/2 absolute -translate-x-1/2'></div>
        <div className='bg-[#44FFFF] w-[350px] h-[350px] blur-[175px] opacity-70 top-[1750px] -right-48 absolute'></div>
        <div className='bg-[#44FF8F] w-[450px] h-[450px] blur-[175px] opacity-50 top-[2500px] -left-18 absolute'></div>
        <div className='bg-[#1FB6E7] w-[450px] h-[450px] blur-[175px] opacity-50 top-[3650px] -right-48 absolute'></div>
        <div className='bg-[#5D4CCA] w-[450px] h-[450px] blur-[175px] opacity-50 top-[4700px] -left-36 absolute'></div>
        <div className='bg-[#CD533B] w-[450px] h-[450px] blur-[175px] opacity-50 top-[5650px] -right-48 absolute'></div>
        <div className='bg-[#BCD979] w-[450px] h-[450px] blur-[175px] opacity-50 top-[6700px] -left-36 absolute'></div>
        <div className='bg-[#C5E6A6] w-[450px] h-[450px] blur-[175px] opacity-50 top-[7650px] -right-48 absolute'></div>
        <div className='bg-[#83B5D1] w-[450px] h-[450px] blur-[175px] opacity-50 top-[8700px] -left-36 absolute'></div>
        <div className='bg-[#D33E43] w-[450px] h-[450px] blur-[175px] opacity-50 top-[9650px] -right-48 absolute'></div>
        <div className='bg-[#119822] w-[450px] h-[450px] blur-[175px] opacity-50 top-[10700px] -left-36 absolute'></div>
        <div className='bg-[#7D8CA3] w-[450px] h-[450px] blur-[175px] opacity-50 top-[11650px] -right-48 absolute'></div>
        <div className='bg-[#228CDB] w-[450px] h-[450px] blur-[175px] opacity-50 top-[12700px] -left-36 absolute'></div>
        <div className='bg-[#9C95DC] w-[450px] h-[450px] blur-[175px] opacity-50 top-[13650px] -right-48 absolute'></div>
        <div className='bg-[#D56AA0] w-[450px] h-[450px] blur-[175px] opacity-50 top-[14700px] -left-36 absolute'></div>
        <div className='bg-[#F2E2BA] w-[450px] h-[450px] blur-[175px] opacity-50 top-[16000px] -right-48 absolute'></div>
        <Footer />
      </div>
    </>
  )
}

export default Wrapper