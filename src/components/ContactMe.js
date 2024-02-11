import "../styles/contact-me.css"

function ContactMe() {
  return (
    <div id='contact'>
      <h2 id='nav-contact'>Contact Me</h2>
      <div className='boxes'>
        <div className='box'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 512 512'>
            <path d='M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z' />
          </svg>
          <a href='mailto:o.solovei.ua@gmail.com'>
            o.solovei.ua@gmail.com
          </a>
        </div>
        <div className='box'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 384 512'>
            <path d='M16 64C16 28.7 44.7 0 80 0H304c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H80c-35.3 0-64-28.7-64-64V64zM144 448c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16s-7.2-16-16-16H160c-8.8 0-16 7.2-16 16zM304 64H80V384H304V64z' />
          </svg>
          <a href='tel:+38 097 472 35 35'>
            +38 097 472 35 35
          </a>
        </div>
        <div className='box'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 384 512'>
            <path d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z' />
          </svg>
          <a href='https://www.google.com/maps/place/%D0%B3%D0%BE%D1%80%D0%BE%D0%B4+%D0%9A%D0%B8%D0%B5%D0%B2,+%D0%9A%D0%B8%D0%B5%D0%B2,+02000/@50.4020075,30.2030468,10z/data=!3m1!4b1!4m6!3m5!1s0x40d4cf4ee15a4505:0x5f251d1397901804!8m2!3d50.4501!4d30.5234!16s%2Fg%2F1tjwg7y4?entry=ttu'>
            Kyiv, Ukraine
          </a>
        </div>
      </div>
      <div className='social-icon'>
        <a
          className='social'
          href='//www.instagram.com/o.solovei?utm_source=qr&igsh=MTRnYTl0Mml5bmE4dA=='>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            height='1em'
            viewBox='0 0 448 512'>
            <path d='M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z' />
          </svg>
        </a>
        <a
          className='social'
          href='//www.facebook.com/o.n.solovei'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            height='1em'
            viewBox='0 0 448 512'>
            <path d='M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z' />
          </svg>
        </a>
      </div>
      <div className='border-bottom'></div>
    </div>
  )
}

export default ContactMe
