import './App.css';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { GiRaceCar, GiCircle } from "react-icons/gi";
import { SocialIcon } from 'react-social-icons/component'
import 'react-social-icons/instagram';
import 'react-social-icons/youtube';
import 'react-social-icons/tiktok';
import 'react-social-icons/twitch';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div style={{ position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: '67%', left: '50%', transform: 'translate(-50%, -50%)', fontSize: 40, width: 1000 }}>
            <h1 style={{padding: 0, margin: 0}}>
              KEAWN TANDON
            </h1>
            <p style={{padding: 0, margin: 0}}>OFFICIAL WEBSITE</p>
            <div class='icon-scroll'/>
          </div>

          <img 
            src={require('./images/image1.jpg')}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
      </header>

      <div className='personalInfo' style={{ backgroundColor: 'black',position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden' }}>
        <div className='personalInfoBox' style={{ position: 'absolute', flex: 1, flexDirection: 'column', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', maxWidth: 1000}}>
          <div>
            <img 
              src={require('./images/IMG_3328.HEIC')} 
              style={{width: 400, height: 400,}}/>
            </div>
          <div>
            <h1 style={{fontSize: 60, color: '#8f00ff', fontWeight: 'bold'}}>PROFILE</h1>
            <h2 style={{fontSize: 30}}>KEAWN TANDON: LAMBORGHINI STAR</h2>
            <p style={{fontSize: 20}}>
            I’m Keawn Tandon, a 20-year-old data science student at UCLA, and I’m on a mission to redefine the motorsports scene. My aim? To be among
            the trailblazing drivers of Indian descent making waves in the racing world. My passion isn
            ’t just about the adrenaline; it’
            s an insatiable drive to
            push boundaries and shatter expectations.
            When I’m not racing, I’m hitting the pavement training for marathons or bonding with Sigma Alpha Epsilon brothers. Looking ahead, I envision
            myself racing with top-tier manufacturers and launching my own software venture. But it’
            s not just about personal success; I’m driven to create
            pathways for minorities in motorsports. For me, every race is a step towards change.
            </p>
            <div>
              <h2 className='typewriter' style={{width: 400}}>Lives in: CALABASAS, USA</h2>
            </div>
            
            
          </div>
        </div>
      <img 
            src={require('./images/04_copia.jpg')}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>


      <div style={{backgroundColor: 'black', padding: 40}}>
        <h1 style={{color: 'white', backgroundColor: 'black', paddingTop: 40, fontSize: 70, borderWidth: 0}}>HISTORY</h1>
        <h2 style={{color: 'purple', fontSize: 30, paddingBottom: 30}}>CAREER ACHIEVEMENTS</h2>
        <VerticalTimeline 
          className={ "vertical-timeline" }
          lineColor={ '#AC94F4' }>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#141414', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  #141414' }}
            iconStyle={{ background: 'purple', color: '#fff' }}
            icon={<GiRaceCar />}
          >
            <h3 className="vertical-timeline-element-title" style={{fontSize: 30, paddingBottom: 10}}>2015</h3>
            <h4 className="vertical-timeline-element-subtitle">5th LAKC Championship PRD2</h4>
            <img 
            src={require('./images/Screenshot 2024-01-22 at 9.15.55 am.png')}
            style={{maxWidth: 400, paddingTop: 10}}/>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#141414', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  #141414' }}
            iconStyle={{ background: 'purple', color: '#fff' }}
            icon={<GiRaceCar />}
          >
            <h3 className="vertical-timeline-element-title" style={{fontSize: 30, paddingBottom: 10}}>2016</h3>
            <h4 className="vertical-timeline-element-subtitle">4th LAKC Championship x30 Juniors</h4>
            <img 
            src={require('./images/Screenshot 2024-01-21 at 9.47.15 am.png')}
            style={{maxWidth: 400, paddingTop: 10}}/>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#141414', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  #141414' }}
            iconStyle={{ background: 'purple', color: '#fff' }}
            icon={<GiRaceCar />}
          >
            <h3 className="vertical-timeline-element-title" style={{fontSize: 30, paddingBottom: 10}}>2017</h3>
            <h4 className="vertical-timeline-element-subtitle">1st LAKC Championship S3 Shifter</h4>
            <h4 className="vertical-timeline-element-subtitle">2nd SKUSA Prokart Challenge Championship S3 Shifter</h4>
            <img 
            src={require('./images/Screenshot 2024-01-21 at 9.49.40 am.png')}
            style={{maxWidth: 400, paddingTop: 10}}/>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#141414', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  #141414' }}
            iconStyle={{ background: 'purple', color: '#fff' }}
            icon={<GiRaceCar />}
          >
            <h3 className="vertical-timeline-element-title" style={{fontSize: 30, paddingBottom: 10}}>2018</h3>
            <h4 className="vertical-timeline-element-subtitle">1st LAKC Championship S2 Shifter Pro</h4>
            <h4 className="vertical-timeline-element-subtitle">1st SKUSA ProKart Challenge Championship S2 Shifter Pro</h4>
            <h4 className="vertical-timeline-element-subtitle">4th SKUSA ProTour Championship S2 Shifter Pro </h4>
            <img 
            src={require('./images/Screenshot 2024-01-21 at 10.00.16 am.png')}
            style={{maxWidth: 400, paddingTop: 10}}/>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: '#141414', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  #141414' }}
            iconStyle={{ background: 'purple', color: '#fff' }}
            icon={<GiRaceCar />}
          >
            <h3 className="vertical-timeline-element-title" style={{fontSize: 30, paddingBottom: 10}}>2019</h3>
            <h4 className="vertical-timeline-element-subtitle">1st Rok Cup Shifter Championship</h4>
            <h4 className="vertical-timeline-element-subtitle">3rd SKUSA Pro Tour Championship</h4>
            <img 
            src={require('./images/Screenshot 2024-01-21 at 9.59.13 am.png')}
            style={{maxWidth: 400, paddingTop: 10}}/>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: '#141414', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  #141414' }}
            iconStyle={{ background: 'purple', color: '#fff' }}
            icon={<GiRaceCar />}
          >
            <h3 className="vertical-timeline-element-title" style={{fontSize: 30, paddingBottom: 10}}>2020</h3>
            <h4 className="vertical-timeline-element-subtitle">3rd Rok Cup Shifter Championship</h4>
            <img 
            src={require('./images/Screenshot 2024-01-21 at 9.50.15 am.png')}
            style={{maxWidth: 400, paddingTop: 10}}/>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: '#141414', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  #141414' }}
            iconStyle={{ background: 'purple', color: '#fff' }}
            icon={<GiRaceCar />}
          >
            <h3 className="vertical-timeline-element-title" style={{fontSize: 30, paddingBottom: 10}}>2021</h3>
            <h4 className="vertical-timeline-element-subtitle">2nd Rok Cup Shifter Championship</h4>
            <img 
            src={require('./images/Screenshot 2024-01-20 at 1.10.00 pm.png')}
            style={{maxWidth: 400, paddingTop: 10}}/>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: '#141414', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  #141414' }}
            iconStyle={{ background: 'purple', color: '#fff' }}
            icon={<GiRaceCar />}
          >
            <h3 className="vertical-timeline-element-title" style={{fontSize: 30, paddingBottom: 10}}>2023</h3>
            <h4 className="vertical-timeline-element-subtitle">5th in the nation (Karting)</h4>
            <h4 className="vertical-timeline-element-subtitle">4th Protour KZ Shifter</h4>
            <h4 className="vertical-timeline-element-subtitle">Top 10 Supernats KZ Shifter</h4>
            <h4 className="vertical-timeline-element-subtitle">2nd Rok Cup Shifter Championship</h4>
            <img 
            src={require('./images/Screenshot 2024-01-21 at 9.56.41 am.png')}
            style={{maxWidth: 400, paddingTop: 10}}/>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            iconStyle={{ background: 'purple', color: '#fff' }}
            icon={<GiCircle />}
          >
          </VerticalTimelineElement>

        </VerticalTimeline>
      </div>
      <div>
        <img src={require('./images/Screenshot 2024-01-20 at 1.33.57 pm.png')} 
            style={{ width: '100%', height: '60%', objectFit: 'fit' }}/>
      </div>
      
      <div style={{ backgroundColor: 'black',position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', maxWidth: 1000}}>
          <div style={{display: 'flex', flexDirection: 'row'}}>
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', paddingRight: 300}}>
              <h1 style={{fontSize: 70, padding: 0, margin: 1, color: '#b59326'}}>TEAM</h1>
              <h2 style={{fontSize: 30, padding: 0, margin: 10}}>SINCE 2022</h2>
              <img 
                src={require('./images/pngimg.com - lamborghini_PNG10709.png')}
                style={{height: 200}}/>
              <img 
              src={require('./images/output-onlinepngtools.png')}
              style={{width: 250, paddingTop: 20}}/>
              <h2 style={{fontSize: 30, padding: 0, margin: 10, color: '#b59326'}} >2023 PRO-AM SUPER-TROFEO CHAMPION</h2>

            </div>
            
            <img 
                src={require('./images/Image.heic')}
                style={{height: 700}}/>
          </div>
          
        </div>
        <img 
              src={require('./images/04_copia.jpg')}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>

      <div style={{backgroundColor: 'black', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
        <h1 style={{color: '#8f00ff', fontSize: 70, paddingTop: 60, paddingBottom: 60}}>FOLLOW ME</h1>
        <div style={{display: 'flex', flexDirection: 'row', paddingBottom: 70}}>
          <SocialIcon style={{marginLeft: 15, marginRight: 15}} bgColor="purple" url="https://www.instagram.com/keawnracing?igsh=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr"/>
          <SocialIcon style={{marginLeft: 15, marginRight: 15}} bgColor="purple" url="https://youtube.com/@keawnracing?si=IR4K16Onlpv63H3_" />
          <SocialIcon style={{marginLeft: 15, marginRight: 15}} bgColor="purple" url="https://www.tiktok.com/@keawnracing?_t=8jFdGjRadw6&_r=1" />
          <SocialIcon style={{marginLeft: 15, marginRight: 15}} bgColor="purple" url="https://m.twitch.tv/keawnracing"/>
        </div>
        

      </div>
      
    </div>
  );
}

export default App;
