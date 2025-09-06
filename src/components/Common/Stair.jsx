import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef } from 'react'
import { useLocation } from 'react-router-dom';

const Stair = ({children}) => {

    const stairRef = useRef(null);
    const currentPath = useLocation().pathname;
    const pageRef = useRef(null)
    
    useGSAP(function(){
        const tl = gsap.timeline();
        tl.to(stairRef.current, {
            display : 'block'
        })

        tl.from('.stair', {
            height : 0,
            stagger : {
                amount : -0.3
            }
        })

        tl.to('.stair', {
            y : "100%",
            stagger : {
                amount : -0.3
            }
        })

        tl.to(stairRef.current, {
            display : 'none'
        })

        tl.to('.stair', {
            y : '0%'
        })

        gsap.from(pageRef.current, {
            opacity : 0,
            delay : 1.5,
            scale : 1.2
        })
    }, [currentPath])

    console.log(children)
  return (
    <div>
        <div ref={stairRef} className='h-screen fixed w-full z-50 top-0'>
        <div className='flex h-full w-full'>
            <div className='stair h-full w-1/5 bg-black'></div>
            <div className='stair h-full w-1/5 bg-black'></div>
            <div className='stair h-full w-1/5 bg-black'></div>
            <div className='stair h-full w-1/5 bg-black'></div>
            <div className='stair h-full w-1/5 bg-black'></div>
        </div>
        </div>
        <div ref={pageRef}>
            {children}
        </div>
    </div>
  )
}

export default Stair