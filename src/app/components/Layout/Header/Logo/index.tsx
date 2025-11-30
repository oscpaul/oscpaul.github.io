import Image from 'next/image'
import Link from 'next/link'
    import { usePathname } from 'next/navigation';


const Logo: React.FC = () => {

      const pathname = usePathname();
  if (pathname === '/') {
  return (
    <Link href='/' className='flex items-center gap-4'>
      <Image
        src='/images/Logo/Logo.svg'
        alt='logo'
        width={117}
        height={34}
        className='w-fit'
        quality={100}
      />
      <p className='text-black text-2xl font-semibold '>The Golden Lantern</p>
    </Link>
  )
  }

  else
    {
  return (
    <Link href='/' className='flex items-center gap-4'>
      <Image
        src='/images/Logo/Logo.svg'
        alt='logo'
        width={117}
        height={34}
        className='w-fit'
        quality={100}
      />
      <p className='golden-text text-black text-2xl font-semibold '>The Golden Lantern</p>
    </Link>
  )
  }

}

export default Logo
