import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React, { useRef } from 'react'

const Agence = () => {

  gsap.registerPlugin(ScrollTrigger);
  const imageDivRef = useRef(null);
  const imageRef = useRef(null);

  const imageArray = [
    'https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Olivier_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Lawrence_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/HugoJoseph_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/ChantalG_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MyleneS_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/SophieA_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Claire_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Michele_480X640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MEL_480X640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/CAMILLE_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MAXIME_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MEGGIE_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/joel_480X640_3-480x640.jpg',
  ]

  useGSAP(function(){
    gsap.to(imageDivRef.current, {
      scrollTrigger:{
        trigger:imageDivRef.current,
        start : 'top 28%',
        end : 'top -70%',
        pin : true,
        pinSpacing : true,
        pinReparent : true,
        pinType : 'transform',
        scrub : 1,
        anticipatePin : 1,
        invalidateOnRefresh : true,
        onUpdate : function(elem){
          let imageProgress = Math.floor(elem.progress * imageArray.length);
          if(imageArray.length > imageProgress){
            imageRef.current.src = imageArray[imageProgress];
          }
          else {
            imageRef.current.src = imageArray[imageArray.length - 1]
          }
        }
      }
    })
  })

  return (
    <div>
      <div className='section-1 py-1'>
        <div ref={imageDivRef} className='h-[20vw] overflow-hidden rounded-4xl w-[15vw] absolute bg-red-500 top-56 left-[31vw]'>
          <img ref={imageRef} className='h-full object-cover w-full' src="https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg" alt="" />
        </div>

        <div className='font-[font2] relative'>
          <div className='mt-[55vh]'>
            <h1 className='agence text-center uppercase'>Soixan7e <br /> Douze </h1>
          </div>

          <div className='pl-[40%] mt-20'>
            <p className='text-6xl'> &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Notre curiosité nourrit notre créativité. On reste humbles et on dit non aux gros egos, même le vôtre. Une marque est vivante. Elle a des valeurs, une personnalité, une histoire. Si on oublie ça, on peut faire de bons chiffres à court terme, mais on la tue à long terme. C’est pour ça qu’on s’engage à donner de la perspective, pour bâtir des marques influentes.</p>
          </div>
        </div>
      </div>

      <div className="section-2 h-screen">

      </div>
    </div>
  )
}

export default Agence