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
        <title>Emicles B. S. Manguinho Filho</title>
      </head>
      
      <body className={`${inter.className} antialiased`}>
        <div className='container'>
          <div className="row pt-3">  
            <div className='col-md-6 border-right sidemenu w-25'>
              <SideNav />  
            </div>
            
            <div className="col-md-6 sidecontent w-75">
                <div className="row text-start mt-3">
                  <div className='text-center mb-3'>
                    <h1 className={`${playfair.className}`}>EMICLES B. S. MANGUINHO FILHO</h1>
                    <h4>Economista, Alanista de Custo, Controller Financeiro</h4>
                  </div>
                  
                  {children}
                </div>
            </div>
          </div>
      
      </div>
        
      </body>

    </html>
  );
}

