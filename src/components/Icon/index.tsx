import { HiUser } from 'react-icons/hi'
import { RiShoppingCart2Fill } from 'react-icons/ri'

interface IconProps {
  name?: string
  className: string
}

export default function Icon({ name, className }: IconProps) {
  switch (name) {
    case 'login': {
      return <HiUser className={className} />
    }

    case 'cart': {
      return <RiShoppingCart2Fill className={className} />
    }

    default: {
      return <></>
    }
  }
}
