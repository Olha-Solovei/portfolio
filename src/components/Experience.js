import "../styles/experience.css"

function Experience() {
  return (
    <div id='experience'>
      <h2>Experience</h2>
      <div className='border'></div>
      <div className='experience'>
        <div className='timeline'>
          <div className='item'>
            <div className='date'>
              <span className='year'>2020</span>
              <span className='arrow'></span>
            </div>
            <div className='separator'>
              <div className='dot'></div>
              <div className='line'></div>
            </div>
            <div className='texts'>
              <h3>Freelance, Ukraine</h3>
              <h4>Web design</h4>
              <p>
                Сompleted courses on one-page website
                design. <br></br>Designed the layout of
                landing pages and business card sites, while
                also implementing new features for existing
                web applications utilizing JavaScript and
                CSS frameworks.
              </p>
            </div>
          </div>
          <div className='item'>
            <div className='date'>
              <span className='year'>2022</span>
              <span className='arrow'></span>
            </div>
            <div className='separator'>
              <div className='dot'></div>
              <div className='line'></div>
            </div>
            <div className='texts'>
              <h3>Codeborne Ltd., Tallinn, Estonia</h3>
              <h4>Frontend developer intern</h4>
              <p>
                Collaborated within a team environment on
                three distinct projects. My duties
                encompassed the creation of components for
                user interfaces, the development of designs,
                and the implementation of unit tests.
                Additionally, I played a key role in
                introducing new features and enhancing
                responsiveness in existing designs.
              </p>
            </div>
          </div>
          <div className='item'>
            <div className='date'>
              <span className='year'>2023</span>
              <span className='arrow'></span>
            </div>
            <div className='separator'>
              <div className='dot'></div>
              <div className='line'></div>
            </div>
            <div className='texts'>
              <h3>Numami Ltd., Tallinn, Estonia</h3>
              <h4>UI/Graphic design</h4>
              <p>
                Crafted illustrations and preliminary
                sketches of materials, engaging in
                discussions with clients to review and
                incorporate essential adjustments.
                Responsible for the selection of fonts and
                the creation of icons.
              </p>
            </div>
          </div>
          <div className='item'>
            <div className='date'>
              <span className='year'>2023</span>
              <span className='arrow'></span>
            </div>
            <div className='separator'>
              <div className='dot'></div>
              <div className='line'></div>
            </div>
            <div className='texts'>
              <h3>Freelance, Ukraine</h3>
              <h4>Frontend development, Web design</h4>
              <p>
                Participated in the development of websites
                for a charitable organization, created
                landing pages for online stores, expanded
                the functionality of existing websites, and
                took on the creation of several of his own
                projects using React and CSS frameworks.
              </p>
            </div>
          </div>
        </div>
      </div>
      <a className='up-btn' href='#top'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 512 512'>
          <path d='M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM135.1 217.4c-4.5 4.2-7.1 10.1-7.1 16.3c0 12.3 10 22.3 22.3 22.3H208v96c0 17.7 14.3 32 32 32h32c17.7 0 32-14.3 32-32V256h57.7c12.3 0 22.3-10 22.3-22.3c0-6.2-2.6-12.1-7.1-16.3L269.8 117.5c-3.8-3.5-8.7-5.5-13.8-5.5s-10.1 2-13.8 5.5L135.1 217.4z' />
        </svg>
      </a>
    </div>
  )
}

export default Experience
