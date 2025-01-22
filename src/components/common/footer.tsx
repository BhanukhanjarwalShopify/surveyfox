'use client'
import Link from 'next/link'
import Typography from '@components/ui/typography'
import Image from 'next/image'

export function Footer() {
  return (
    <footer className="flex h-12 items-center justify-center w-full border-t">
      <div className="w-full max-w-[1280px] md:px-8 px-4 flex place-content-center">
        <div className="gap-x-11 md:flex flex-1 hidden">
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
        </div>
        <div className="flex max-w-fit items-center gap-x-4">
      
       
          <Link
            href="/privacy-policy"
            className="pointer block w-fit"
          >
            <Typography variant="p">
              Privacy Policy
            </Typography>
          </Link>
        </div>
      </div>
    </footer>
  )
}
