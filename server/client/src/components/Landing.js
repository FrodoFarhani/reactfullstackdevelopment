import React from 'react';

const Landing = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1 class='header center red-text'>Starter Template</h1>
      <div class='row center'>
        <h5 class='header col s12 light'>
          A modern responsive front-end framework based on Material Design
        </h5>
      </div>
      <div class='row center'>
        <a
          href='/auth/google'
          id='download-button'
          class='btn-large waves-effect waves-light red'
        >
          Get Started
        </a>
      </div>
      <div class='container'>
        <div class='section'>
          <div class='row'>
            <div class='col s12 m4'>
              <div class='icon-block'>
                <h2 class='center light-blue-text'>
                  <i class='material-icons'>flash_on</i>
                </h2>
                <h5 class='center'>Speeds up development</h5>
              </div>
            </div>

            <div class='col s12 m4'>
              <div class='icon-block'>
                <h2 class='center light-blue-text'>
                  <i class='material-icons'>group</i>
                </h2>
                <h5 class='center'>User Experience Focused</h5>
              </div>
            </div>

            <div class='col s12 m4'>
              <div class='icon-block'>
                <h2 class='center light-blue-text'>
                  <i class='material-icons'>settings</i>
                </h2>
                <h5 class='center'>Easy to work with</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer class='page-footer red'>
        <div class='container'>
          <div class='row'>
            <div class='col l6 s12'>
              <h5 class='white-text'>Company Bio</h5>
              <p class='grey-text text-lighten-4'>
                We are a team of college students working on this project like
                it's our full time job. Any amount would help support and
                continue development on this project and is greatly appreciated.
              </p>
            </div>
            <div class='col l3 s12'>
              <h5 class='white-text'>Settings</h5>
              <ul>
                <li>
                  <a class='white-text' href='#!'>
                    Link 1
                  </a>
                </li>
                <li>
                  <a class='white-text' href='#!'>
                    Link 2
                  </a>
                </li>
                <li>
                  <a class='white-text' href='#!'>
                    Link 3
                  </a>
                </li>
                <li>
                  <a class='white-text' href='#!'>
                    Link 4
                  </a>
                </li>
              </ul>
            </div>
            <div class='col l3 s12'>
              <h5 class='white-text'>Connect</h5>
              <ul>
                <li>
                  <a class='white-text' href='#!'>
                    Link 1
                  </a>
                </li>
                <li>
                  <a class='white-text' href='#!'>
                    Link 2
                  </a>
                </li>
                <li>
                  <a class='white-text' href='#!'>
                    Link 3
                  </a>
                </li>
                <li>
                  <a class='white-text' href='#!'>
                    Link 4
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class='footer-copyright'>
          <div class='container'>
            Made by{' '}
            <a
              class='red-text text-lighten-3'
              href='https://github.com/so0oshiance/'
            >
              So0oshiance!
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default Landing;
