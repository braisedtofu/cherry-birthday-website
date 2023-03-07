import './App.css';
import mumpiano from './assets/mumpiano.mp4';
import cherrycompilation from './assets/cherrycompilation.mp4';
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";
import React, { useEffect, useRef, useState } from 'react';
import myImage from './assets/thumbnail_IMG_0802.jpeg';
import myImage2 from './assets/thumbnail_S6000516.jpeg';
import myImage3 from './assets/106.JPG';
import myImage4 from './assets/thumbnail_IMG_2101.jpeg';
import myImage5 from './assets/thumbnail_S6000517.jpeg';
import myImage6 from './assets/IMG_0149.JPG';
import myImage7 from './assets/IMG_0139.JPG';
import myImage8 from './assets/IMG_0145.JPG';
import myImage9 from './assets/IMG_0147.JPG';
import myImage10 from './assets/091.JPG'
import myImage11 from './assets/thumbnail_IMG_0801.jpeg';
import myImage12 from './assets/thumbnail_IMG_0806.jpeg';

function App() {
  const [isVideo1Intersecting, setIsVideo1Intersecting] = useState(false);
  const [isVideo2Intersecting, setIsVideo2Intersecting] = useState(false);

  const video1Ref = useRef(null);
  const video2Ref = useRef(null);


  useEffect(() => {
    const observer1 = new IntersectionObserver(
      ([entry]) => {
        setIsVideo1Intersecting(entry.isIntersecting);
      },
      { threshold: 0.5} // Set the threshold to 50%
    );

    const observer2 = new IntersectionObserver(
      ([entry2]) => {
        setIsVideo2Intersecting(entry2.isIntersecting);
      },
      { threshold: 0.5} // Set the threshold to 50%
    );

    observer1.observe(video1Ref.current);
    observer2.observe(video2Ref.current);

    return () => {
      observer1.disconnect();
      observer2.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!isVideo1Intersecting) {
      video1Ref.current.pause();
    } else {
      video1Ref.current.play();

    }
  }, [isVideo1Intersecting]);

  useEffect(() => {
    if (isVideo1Intersecting || !isVideo2Intersecting) {
      video2Ref.current.pause();
    } else {
      video2Ref.current.play();
    }

  }, [isVideo2Intersecting, isVideo1Intersecting]);
  

  return (
    <ScrollContainer>
      <ScrollPage>
          <Animator animation={batch(Sticky(), Fade())}>
                          <video ref={video1Ref} loop>
                          <source src={mumpiano} type="video/mp4"/>
                          </video> 
                          
          </Animator>
          <Animator animation={batch(Sticky(50,85), Fade(), Move())}>
            <div className="text" >it's been a while, hasn't it?</div>
          </Animator>
          <Animator animation={batch(Sticky(50,94), Fade(), Move())}>
            <div className="scrolltext" >(scroll)</div>
          </Animator>
          <Animator animation={batch(Sticky(50,97), Fade(), Move())}>
            <div className="scrolltext" >↓</div>
          </Animator>
      </ScrollPage>
  
      <ScrollPage>
        <Animator animation={batch(Sticky(50,3), Fade(), Move())}>
            <div className="scrolltext" >↑</div>
        </Animator>
        <Animator animation={batch(Sticky(50,6), Fade(), Move())}>
            <div className="scrolltext" >(scroll)</div>
        </Animator>

        <Animator animation={batch(Fade(), Sticky())}>
                <video ref={video2Ref} loop>
                  <source src={cherrycompilation} type="video/mp4"/>
                </video>  
        </Animator>
        <Animator animation={batch(Sticky(50,85), Fade(), Move())}>
              <div className="text">30 years of memories, to be exact</div>
        </Animator>
        <Animator animation={batch(Sticky(50,94), Fade(), Move())}>
            <div className="scrolltext" >(scroll)</div>
        </Animator>
        <Animator animation={batch(Sticky(50,97), Fade(), Move())}>
            <div className="scrolltext" >↓</div>
        </Animator>

        </ScrollPage>

      <ScrollPage>

          <Animator animation={batch(Sticky(50,3), Fade(), Move())}>
            <div className="scrolltext" >↑</div>
          </Animator>
          <Animator animation={batch(Sticky(50,6), Fade(), Move())}>
            <div className="scrolltext" >(scroll)</div>
          </Animator>

          <Animator animation={batch(Fade(), Sticky())}>
              <div className="container">
                <img src={myImage} alt="Cherry Mo"/>
              </div>
          </Animator>

          <Animator animation={batch( Fade(), Sticky(50,85), Move())}>
              <div className="text">time flew, things changed</div>
          </Animator>
          <Animator animation={batch(Sticky(50,94), Fade(), Move())}>
            <div className="scrolltext" >(scroll)</div>
          </Animator>
          <Animator animation={batch(Sticky(50,97), Fade(), Move())}>
            <div className="scrolltext" >↓</div>
          </Animator>

        </ScrollPage>
        
        <ScrollPage>

          <Animator animation={batch(Sticky(50,3), Fade(), Move())}>
            <div className="scrolltext" >↑</div>
          </Animator>
          <Animator animation={batch(Sticky(50,6), Fade(), Move())}>
            <div className="scrolltext" >(scroll)</div>
          </Animator>

          <Animator animation={batch(Fade(), Sticky())}>
              <div className="container">
                <img src={myImage2} alt="Cherry Mo"/>
              </div>
            </Animator>

            <Animator animation={batch( Fade(), Sticky(50,85), Move())}>
              <div className="text">we both grew up so fast</div>
            </Animator>
            <Animator animation={batch(Sticky(50,94), Fade(), Move())}>
            <div className="scrolltext" >(scroll)</div>
          </Animator>
          <Animator animation={batch(Sticky(50,97), Fade(), Move())}>
            <div className="scrolltext" >↓</div>
          </Animator>

        </ScrollPage>

        <ScrollPage>

          <Animator animation={batch(Sticky(50,3), Fade(), Move())}>
            <div className="scrolltext" >↑</div>
          </Animator>
          <Animator animation={batch(Sticky(50,6), Fade(), Move())}>
            <div className="scrolltext" >(scroll)</div>
          </Animator>

          <Animator animation={batch(Fade(), Sticky())}>
              <div className="container">
                <img src={myImage4} alt="Cherry Mo"/>
              </div>
            </Animator>

            <Animator animation={batch( Fade(), Sticky(50,85), Move())}>
              <div className="text">and got through some tough shit</div>
            </Animator>
            <Animator animation={batch(Sticky(50,94), Fade(), Move())}>
            <div className="scrolltext" >(scroll)</div>
          </Animator>
          <Animator animation={batch(Sticky(50,97), Fade(), Move())}>
            <div className="scrolltext" >↓</div>
          </Animator>

        </ScrollPage>

        <ScrollPage>

          <Animator animation={batch(Sticky(50,3), Fade(), Move())}>
            <div className="scrolltext" >↑</div>
          </Animator>
          <Animator animation={batch(Sticky(50,6), Fade(), Move())}>
            <div className="scrolltext" >(scroll)</div>
          </Animator>

          <Animator animation={batch(Fade(), Sticky())}>
              <div className="container">
                <img src={myImage3} alt="Cherry Mo"/>
              </div>
            </Animator>

            <Animator animation={batch( Fade(), Sticky(50,85), Move())}>
              <div className="text">but you will always be my sister</div>
            </Animator>
            <Animator animation={batch(Sticky(50,94), Fade(), Move())}>
            <div className="scrolltext" >(scroll)</div>
          </Animator>
          <Animator animation={batch(Sticky(50,97), Fade(), Move())}>
            <div className="scrolltext" >↓</div>
          </Animator>

        </ScrollPage>

        <ScrollPage>

          <Animator animation={batch(Sticky(50,3), Fade(), Move())}>
            <div className="scrolltext" >↑</div>
          </Animator>
          <Animator animation={batch(Sticky(50,6), Fade(), Move())}>
            <div className="scrolltext" >(scroll)</div>
          </Animator>

          <Animator animation={batch(Fade(), Sticky())}>
              <div className="container">
                <img src={myImage5} alt="Cherry Mo"/>
              </div>
            </Animator>

            <Animator animation={batch( Fade(), Sticky(50,85), Move())}>
              <div className="text">and my biggest role model</div>
            </Animator>
            <Animator animation={batch(Sticky(50,94), Fade(), Move())}>
            <div className="scrolltext" >(scroll)</div>
          </Animator>
          <Animator animation={batch(Sticky(50,97), Fade(), Move())}>
            <div className="scrolltext" >↓</div>
          </Animator>

        </ScrollPage>

        <ScrollPage>

          <Animator animation={batch(Sticky(50,3), Fade(), Move())}>
            <div className="scrolltext" >↑</div>
          </Animator>
          <Animator animation={batch(Sticky(50,6), Fade(), Move())}>
            <div className="scrolltext" >(scroll)</div>
          </Animator>

          <Animator animation={batch(Fade(), Sticky())}>
              <div className="container">
                <img src={myImage6} alt="Cherry Mo"/>
              </div>
            </Animator>

            <Animator animation={batch( Fade(), Sticky(50,85), Move())}>
              <div className="text">even though you're super old, <br></br>nothing much has changed</div>
            </Animator>
            <Animator animation={batch(Sticky(50,94), Fade(), Move())}>
            <div className="scrolltext" >(scroll)</div>
          </Animator>
          <Animator animation={batch(Sticky(50,97), Fade(), Move())}>
            <div className="scrolltext" >↓</div>
          </Animator>

        </ScrollPage>

        <ScrollPage>

          <Animator animation={batch(Sticky(50,3), Fade(), Move())}>
            <div className="scrolltext" >↑</div>
          </Animator>
          <Animator animation={batch(Sticky(50,6), Fade(), Move())}>
            <div className="scrolltext" >(scroll)</div>
          </Animator>

          <Animator animation={batch(Fade(), Sticky())}>
              <div className="container">
                <img src={myImage7} alt="Cherry Mo"/>
              </div>
            </Animator>

            <Animator animation={batch( Fade(), Sticky(50,85), Move())}>
              <div className="text">you still love your 'me time'</div>
            </Animator>
            <Animator animation={batch(Sticky(50,94), Fade(), Move())}>
            <div className="scrolltext" >(scroll)</div>
          </Animator>
          <Animator animation={batch(Sticky(50,97), Fade(), Move())}>
            <div className="scrolltext" >↓</div>
          </Animator>

        </ScrollPage>

        <ScrollPage>

          <Animator animation={batch(Sticky(50,3), Fade(), Move())}>
            <div className="scrolltext" >↑</div>
          </Animator>
          <Animator animation={batch(Sticky(50,6), Fade(), Move())}>
            <div className="scrolltext" >(scroll)</div>
          </Animator>

          <Animator animation={batch(Fade(), Sticky())}>
              <div className="container">
                <img src={myImage9} alt="Cherry Mo"/>
              </div>
            </Animator>

            <Animator animation={batch( Fade(), Sticky(50,85), Move())}>
              <div className="text">you still have a huge appetite<br></br>(we're scared of hangry Cherry)</div>
            </Animator>
            <Animator animation={batch(Sticky(50,94), Fade(), Move())}>
            <div className="scrolltext" >(scroll)</div>
          </Animator>
          <Animator animation={batch(Sticky(50,97), Fade(), Move())}>
            <div className="scrolltext" >↓</div>
          </Animator>

        </ScrollPage>

        <ScrollPage>

          <Animator animation={batch(Sticky(50,3), Fade(), Move())}>
            <div className="scrolltext" >↑</div>
          </Animator>
          <Animator animation={batch(Sticky(50,6), Fade(), Move())}>
            <div className="scrolltext" >(scroll)</div>
          </Animator>

          <Animator animation={batch(Fade(), Sticky())}>
              <div className="container">
                <img src={myImage8} alt="Cherry Mo"/>
              </div>
            </Animator>

            <Animator animation={batch( Fade(), Sticky(50,85), Move())}>
              <div className="text">and you still love adventures</div>
            </Animator>
            <Animator animation={batch(Sticky(50,94), Fade(), Move())}>
            <div className="scrolltext" >(scroll)</div>
          </Animator>
          <Animator animation={batch(Sticky(50,97), Fade(), Move())}>
            <div className="scrolltext" >↓</div>
          </Animator>

        </ScrollPage>

        <ScrollPage>

          <Animator animation={batch(Sticky(50,3), Fade(), Move())}>
            <div className="scrolltext" >↑</div>
          </Animator>
          <Animator animation={batch(Sticky(50,6), Fade(), Move())}>
            <div className="scrolltext" >(scroll)</div>
          </Animator>

          <Animator animation={batch(Fade(), Sticky())}>
              <div className="container">
                <img src={myImage11} alt="Cherry Mo"/>
              </div>
            </Animator>

            <Animator animation={batch( Fade(), Sticky(50,85), Move())}>
              <div className="text">I'm so proud of how far you've come</div>
              </Animator>

              <Animator animation={batch(Sticky(50,94), Fade(), Move())}>
            <div className="scrolltext" >(scroll)</div>
          </Animator>
          <Animator animation={batch(Sticky(50,97), Fade(), Move())}>
            <div className="scrolltext" >↓</div>
          </Animator>
        </ScrollPage>

        <ScrollPage>

          <Animator animation={batch(Sticky(50,3), Fade(), Move())}>
            <div className="scrolltext" >↑</div>
          </Animator>
          <Animator animation={batch(Sticky(50,6), Fade(), Move())}>
            <div className="scrolltext" >(scroll)</div>
          </Animator>

          <Animator animation={batch(Fade(), Sticky())}>
              <div className="container">
                <img src={myImage12} alt="Cherry Mo"/>
              </div>
            </Animator>

            <Animator animation={batch( Fade(), Sticky(50,85), Move())}>
              <div className="text">and miss you heaps!</div>
            </Animator>
              <Animator animation={batch(Sticky(50,94), Fade(), Move())}>
            <div className="scrolltext" >(scroll)</div>
          </Animator>
          <Animator animation={batch(Sticky(50,97), Fade(), Move())}>
            <div className="scrolltext" >↓</div>
          </Animator>
        </ScrollPage>


        <ScrollPage>

          <Animator animation={batch(Sticky(50,3), Fade(), Move())}>
            <div className="scrolltext" >↑</div>
          </Animator>
          <Animator animation={batch(Sticky(50,6), Fade(), Move())}>
            <div className="scrolltext" >(scroll)</div>
          </Animator>

          <Animator animation={batch(Fade(), Sticky())}>
              <div className="container">
                <img src={myImage10} alt="Cherry Mo"/>
              </div>
            </Animator>

            <Animator animation={batch( Fade(), Sticky(50,85), Move())}>
              <div className="text">Happy birthday &lt;3</div>
            </Animator>
            <Animator animation={batch(Sticky(50,94), Fade(), Move())}>
            <div className="scrolltext" >(end)</div>
          </Animator>
        </ScrollPage>

    </ScrollContainer>
  );
}

export default App;
