'use client'
import './globals.css';
import 'bootstrap/dist/css/bootstrap.css';
import React, {useEffect} from 'react';
import SideNav from '@/app/ui/sidenav';
import Image from 'next/image';
import { inter, playfair } from './ui/fonts';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  useEffect(() => {
    document.body.style.backgroundColor = '#F3F7EC';

    //Clear changes on freeing the component
    return () => {
      document.body.style.backgroundColor = '';
    };
  }, []);
  
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Hello World</title>
      </head>
      
      <body className={`${inter.className} antialiased`}>
        <div className='container'>
          <div className="row pt-3">  
            <div className='col-md-6 border-right sidemenu w-25'>
              <SideNav />  
            </div>
            
            <div className="col-md-6 sidecontent w-75">
              <div className="row">
                {/* <div className="col-12">
                <Image 
                    src="/home-top.jpg"
                    width={1000}
                    height={250}
                    alt="home-image"
                    className="rounded w-100 mh-50"
                  />
                </div> */}
                <div className="text-start mt-3">
                  {children}
                </div>
              </div>
            </div>
          </div>
      
      </div>
        
      </body>

    </html>
  );
}

