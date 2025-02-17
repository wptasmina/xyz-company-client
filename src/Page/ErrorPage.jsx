import errorImg from '/error.jpg'

export default function ErrorPage() {
  return (
   <section>
     <div className='max-w-7xl max-h-7xl mx-auto bg-[#BFC3F3] '>
      <img src={errorImg} alt="Error" className='w-[600px] h-[400px] ' />
    </div>
   </section>
  )
}
