
import Image from 'next/image'
import Link from 'next/link'
    import { usePathname } from 'next/navigation';


const Logo: React.FC = () => {

      const pathname = usePathname();
  if (pathname === '/') {
  return (
    <Link href='/' className='top0 flex items-center gap-0'>
      <Image
  src='/images/lantern.jpg'
        alt='logo'
      width={1}
       height={1}
             style={{ height: '25vh', width: 'auto' }} // Inline style
        className='w-contain'
        quality={100}
      />
      <p className='text-black text-2xl font-semibold '>The Golden Lantern</p>
    </Link>
  )
  }

  else
    {
  return (
    <Link href='/' className='top0 flex items-center gap-4'>
      <Image
  src='/images/lantern.jpg'
        alt='logo'
     width={1}
       height={1}
             style={{ height: '25vh', width: 'auto' }} // Inline style
        className='w-contain'
        quality={100}
      />
      <p className='golden-text text-black text-2xl font-semibold '>The Golden Lantern</p>
    </Link>
  )
  }

}

export default Logo
