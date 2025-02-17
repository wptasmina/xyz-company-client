import errorImg from '/error.jpg'

export default function ErrorPage() {
  return (
   <section className='bg-[#BFC3F3]'>
     <div className='max-w-7xl mx-auto '>
      <img src={errorImg} alt="Error" className='w-[400px] ' />
    </div>
   </section>
  )
}
