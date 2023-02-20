import { HiUser } from 'react-icons/hi'
import { RiShoppingCart2Fill } from 'react-icons/ri'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'

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

    default: {
      return <></>
    }
  }
}
