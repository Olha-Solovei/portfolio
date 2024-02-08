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
                Designed the layout of landing pages and
                business card sites, while also implementing
                new features for existing web applications
                utilizing JavaScript and CSS frameworks.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience
