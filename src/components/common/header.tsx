'use client'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { usePathname } from 'next/navigation'
import Typography from '@/components/ui/typography'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTrigger
} from '@/components/ui/drawer'
import { MenuIcon, X } from 'lucide-react'
import Image from 'next/image'
interface SidebarProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export function Header({ className }: SidebarProps) {
  const pathname = usePathname()
  const items = [
    {
      href: 'https://map.sistilli.dev/public/coding/SaaS+Boilerplate',
      title: 'Book a demo',
      openInNewTab: true
    }
    // { href: '#pricing', title: 'Features' },
    // {
    //   href: 'mailto:myemail@.com',
    //   title: 'Contact Us'
    // }
  ]

  const getLogo = () => (
    <Link href="/" className="pointer flex items-center">
     <Image
                width={35}
                height={511}
                alt="Pandem.dev hero image"
                src="/asdf.png"
              />
      <Typography className="!text-white !text-base font-medium " style={{marginLeft:"7px" , marginTop:"5.5px"}}>
        SurveyFox
      </Typography>
    </Link>
  )

  const getAuthButtons = () => (
    <div className="flex gap-3 items-center">
      <Link
        href="https://cal.com/piyush-surveyfox/30min?date=2025-01-21&month=2025-01"
        target="_blank"
      >
        <Typography variant="p">Book A Demo</Typography>
      </Link>
    
   <Button
  size="tiny"
  color="ghost"
  onClick={() => window.open('https://apps.shopify.com/surveyfox-customer-surveys', '_blank')}
>
  <Typography variant="p" className="text-black" style={{ marginLeft: "2px" }}>
    Install on
  </Typography>
  <Image
    style={{ marginLeft: "6.5px", marginBottom: "2px" }}
    width={80}
    height={511}
    alt="Pandem.dev hero image"
    src="/Shopify.png"
  />
</Button>


  
    </div>
  )

  const getHeaderItems = () => {
    return (
      <>
        {items.map((item) => {
          const selected =
            pathname === item.href ||
            pathname.includes(item.href)
          return (
            <Link
              href={item.href}
              className="pointer block w-fit"
              target={item.openInNewTab ? '_blank' : ''}
              key={item.title}
            >
           
            </Link>
          )
        })}
      </>
    )
  }

  return (
    <div
      className={cn(
        `flex md:h-12 h-14 items-center justify-center w-full
          border-b`,
        className
      )}
    >
      <div className="w-full max-w-[1280px] md:px-8 px-4">
        {/* Desktop */}
        <div className="flex items-center gap-x-8 w-full">
          <div className="md:flex-0 min-w-fit flex-1">
            {getLogo()}
          </div>
          <div className="hidden md:flex flex items-center w-full">
            <div className="flex items-center gap-x-8 flex-1">
              {getHeaderItems()}
            </div>
            {getAuthButtons()}
          </div>
          {/* Mobile */}
          <div className="md:hidden flex gap-x-4 items-center">
            {getAuthButtons()}
            <Drawer direction="right">
              <DrawerTrigger asChild>
                <MenuIcon />
              </DrawerTrigger>
              <DrawerContent className="h-screen top-0 right-0 left-auto mt-0 w-64 rounded-none">
                <div className="mx-auto w-full p-5">
                  <DrawerHeader>
                    <DrawerClose asChild>
                      <div className="w-full flex items-end justify-end">
                        <X />
                      </div>
                    </DrawerClose>
                  </DrawerHeader>
                  <div className="p-4 pb-0 space-y-4">
                    {getHeaderItems()}
                  </div>
                </div>
              </DrawerContent>
            </Drawer>
          </div>
        </div>
      </div>
    </div>
  )
}
