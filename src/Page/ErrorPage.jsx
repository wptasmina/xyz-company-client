import errorImg from '/error.jpg'

export default function ErrorPage() {
  return (
   <section className='min-h-[1440px] bg-[#BFC3F3]  '>
     <div className='bg-[#BFC3F3] flex justify-center flex-col items-center h-[400px] mx-auto py-10'>
        <img src={errorImg} alt="Error" className=' ' />
       <div>
        <p className='text-2xl text-red-600'>Oops!  Page Not Found</p>
       </div>
     </div>
   </section>
  )
}
