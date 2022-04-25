import Button from 'components/Button'
import Text from 'components/Text'
import { AnimatePresence, motion } from 'framer-motion'

function Popup({text, buttonText, openState, onPress}) {
  if(text && buttonText && openState && onPress) {
    return (
      <AnimatePresence>
        <motion.div 
          className={`${!openState ? 'hidden' : ''} bg-black/90 flex justify-center items-center absolute w-full h-screen top-0 px-8 z-40`}
          initial={{opacity: 0}}
          animate={{ opacity: 1 }}
          exit={{opacity: 0}}
          transition={{ duration: 0.7 }}
        >
          <motion.div 
            className='bg-neutral-900 p-6 rounded-2xl flex flex-col items-center gap-8 max-w-md text-center'
            initial={{scale: 0}}
            animate={{ scale: 1 }}
            exit={{scale: 0}}
            transition={{ duration: 0.5 }}
          >
            <Text styles='text-lg'>{text}</Text>
            <Button type='primary' onClick={onPress}>{buttonText}</Button>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    )
  } else {
    console.error('One of the required props was not provided')
    return null
  } 
}

export default Popup