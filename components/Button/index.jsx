function Button({type, styles, children, onClick}) {
  if(type=='primary') {
    return (
      <button className={`${styles} text-caribbean-green hover:text-[#333333] font-poppins font-medium hover:font-semibold tracking-wide py-2 px-6 rounded-lg bg-[#333333] hover:bg-caribbean-green transition-colors duration-300`} onClick={onClick}>
        {children}
      </button>
    )
  } else if(type=='secondary') {
    return (
      <button className={`${styles} text-[#8e9e9b] hover:text-caribbean-green font-poppins font-medium tracking-wide py-2 px-6 rounded-lg bg-[#333333] hover:bg-[#474747] transition-colors duration-300`} onClick={onClick}>
        {children}
      </button>
    )
  } else {
    return (
      <button className={`${styles} text-[#8e9e9b] hover:text-caribbean-green font-poppins font-medium tracking-wide py-2 px-6 rounded-lg bg-[#333333] hover:bg-[#474747] transition-colors duration-300`} onClick={onClick}>
        {children}
      </button>
    )
  }
}

export default Button;