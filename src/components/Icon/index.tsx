import { HiUser } from 'react-icons/hi'
import { RiShoppingCart2Fill } from 'react-icons/ri'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'
import { BsWhatsapp } from 'react-icons/bs'
import { ImArrowUp2 } from 'react-icons/im'

interface IconProps {
  name?: string
  className?: string
}

export default function Icon({ name, className }: IconProps) {
  switch (name) {
    case 'login': {
      return <HiUser className={className} />
    }
    case 'cart': {
      return <RiShoppingCart2Fill className={className} />
    }
    case 'facebook': {
      return <FaFacebookF className={className} />
    }
    case 'instagram': {
      return <FaInstagram className={className} />
    }
    case 'twitter': {
      return <FaTwitter className={className} />
    }
    case 'whatsapp': {
      return <BsWhatsapp className={className} />
    }
    case 'arrowUp': {
      return <ImArrowUp2 className={className} />
    }

    default: {
      return <></>
    }
  }
}
