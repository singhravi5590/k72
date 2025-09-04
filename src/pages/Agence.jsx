import React from 'react'

const Agence = () => {
  return (
    <div>
      <div className='section-1'>
        <div className='h-[20vw] overflow-hidden rounded-4xl w-[15vw] absolute bg-red-500 top-55 left-[31vw]'>
          <img className='h-full object-cover w-full' src="https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg" alt="" />
        </div>

        <div className='font-[font2] relative'>
          <div className='mt-[55vh]'>
            <h1 className='agence text-center uppercase'>Soixan7e <br /> Douze </h1>
          </div>

          <div className='pl-[40%] mt-20 bg-red-500'>
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