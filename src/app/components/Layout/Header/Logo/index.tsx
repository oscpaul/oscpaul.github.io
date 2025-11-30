import Image from 'next/image'
import Link from 'next/link'
    import { usePathname } from 'next/navigation';
    import { userAgentFromString } from "next/server"; // For Next.js 13+ App Router
      
export function isServerMobile() {
  const headersList = headers();
  const userAgent = headersList.get("user-agent");
    import { headers } from 'next/headers';
  const { device } = userAgentFromString(userAgent || undefined); // Use a library to parse for more detailed device info
  return device.type === "mobile";
}


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
        width={width_}
        height={height_}
        className='w-fit'
        quality={100}
      />
      <p className='golden-text text-black text-2xl font-semibold '>The Golden Lantern</p>
    </Link>
  )
  }

}

export default Logo
