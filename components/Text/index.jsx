function Text({type, children, styles}) {
  return(
    <>
      {type=='title' && <h1 className={`${styles} font-poppins text-white text-4xl sm:text-3xl font-bold cursor-text`}>{children}</h1>}
      {type=='subtitle' && <h2 className={`${styles} font-poppins text-white text-3xl font-semibold cursor-text`}>{children}</h2>}
      {type=='small-title' && <h3 className={`${styles} font-poppins text-white text-2xl font-medium cursor-text`}>{children}</h3>}
      {type=='paragraph' && <p className={`${styles} font-open-sans text-white text-sm font-normal cursor-text`}>{children}</p>}
      {type==undefined && <p className={`${styles} font-open-sans text-white font-normal cursor-text`}>{children}</p>}
    </>
  )
}

export default Text;