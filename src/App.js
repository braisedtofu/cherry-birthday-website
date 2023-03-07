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
                          <video ref={video1Ref} loop autoPlay playsInline>
                          <source url='https://wynnmybucket.s3.us-east-1.amazonaws.com/mumpiano.mp4?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aDmFwLXNvdXRoZWFzdC0yIkcwRQIgVGPrVb60LBiM2JZb5WoNKxecjo6T2TTtz8ZWGeYopyICIQC4cRuJFDi5uTYnM5k1Q%2FQp330S6m5gQjU0TgI00gcrNSrkAggmEAAaDDM2NzQ0NDIzNjI4MCIM1zs9u9Y0p6MGjBOjKsECVim0SZdUrM0qGV2teSrJQArKWXYI%2FBGVMnzFLerR4o9V%2BNagdPuvGQT98Oswfcg%2FcU3CWEu8swPDDYksvxWzqxPL8jfO6PaudFr%2BzE3Uek8Sl4YYmdG7XHlDELXJNgqKtIQq2Ifc3eJlH7gU9wf4W%2FXu6lo7Zdy0p2RwGjoo7sM0eNxYwRX9goK34%2FTrbd59XzB0P%2FoZMNtJLYv9gzBEmi7BnB1ULX2qc0oryGMsGYrvKMFtA4zWYi920SCoUUfidCoB1nrTPKBX94oAnAb%2FqONngGbYSD9x29lhGGIp00oSduapJKxlxFrA5emt1lhR4YgkYMhRrMxFCkZBAlgXqVnaTzrc0S01SEZd%2FoIeOqMJm7fr25jFdMGO31KSrbcSsfehk9aMDkxahy%2FmMgBn9RpXZBPAn2rDci6%2FwPuBQTiNMML5mqAGOrMCwd%2B88LtLGUT7I7mcJLtUo56yKzkkNIutC0pfK1s0VevsvC9oIN5RZUqRqXLiILZcMTJ%2FUFDo1ZFXHeXschUv3AfHRGcPTNcaZFhcwrSa4TIvdhdzc4a%2FZM5d3TuicHD3x%2FoSmqXkWsykocAEInkwz4tFeBT12WSAZKWvSgN7GAzJyNmfYIcQjW8eYdgM6TVJGVPhaiziiZZGJZjPcFIobAgaFPuBRldmYp0Vq1mHgcjCv%2Fdif6xrP4EwF3gvwf2O8Yl8A2BCd00DNne1DXJ6uMOFBq7woWNfcX%2Bh9N%2F8kF5nxLgW8aussbOVs%2FnmVXr3IDKqX15MwiTHYr6ztfM3hqWnybPg1mLNQc2LrYwWog5q05cCvHdYDiTMYp0eC00T%2Fa5nLj5PdO1JWxjlN08Ftq1KPQ%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230307T043652Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAVLDLCC74GU56WKKF%2F20230307%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=17cbaa4177936b050fd80910e6258dd9c5523c1dcb2f2a2f0b4182dea98df0d2' type="video/mp4"/>
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
                <video ref={video2Ref} loop autoPlay playsInline>
                  <source url='https://wynnmybucket.s3.us-east-1.amazonaws.com/cherrycompilation.mp4?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aDmFwLXNvdXRoZWFzdC0yIkcwRQIgVGPrVb60LBiM2JZb5WoNKxecjo6T2TTtz8ZWGeYopyICIQC4cRuJFDi5uTYnM5k1Q%2FQp330S6m5gQjU0TgI00gcrNSrkAggmEAAaDDM2NzQ0NDIzNjI4MCIM1zs9u9Y0p6MGjBOjKsECVim0SZdUrM0qGV2teSrJQArKWXYI%2FBGVMnzFLerR4o9V%2BNagdPuvGQT98Oswfcg%2FcU3CWEu8swPDDYksvxWzqxPL8jfO6PaudFr%2BzE3Uek8Sl4YYmdG7XHlDELXJNgqKtIQq2Ifc3eJlH7gU9wf4W%2FXu6lo7Zdy0p2RwGjoo7sM0eNxYwRX9goK34%2FTrbd59XzB0P%2FoZMNtJLYv9gzBEmi7BnB1ULX2qc0oryGMsGYrvKMFtA4zWYi920SCoUUfidCoB1nrTPKBX94oAnAb%2FqONngGbYSD9x29lhGGIp00oSduapJKxlxFrA5emt1lhR4YgkYMhRrMxFCkZBAlgXqVnaTzrc0S01SEZd%2FoIeOqMJm7fr25jFdMGO31KSrbcSsfehk9aMDkxahy%2FmMgBn9RpXZBPAn2rDci6%2FwPuBQTiNMML5mqAGOrMCwd%2B88LtLGUT7I7mcJLtUo56yKzkkNIutC0pfK1s0VevsvC9oIN5RZUqRqXLiILZcMTJ%2FUFDo1ZFXHeXschUv3AfHRGcPTNcaZFhcwrSa4TIvdhdzc4a%2FZM5d3TuicHD3x%2FoSmqXkWsykocAEInkwz4tFeBT12WSAZKWvSgN7GAzJyNmfYIcQjW8eYdgM6TVJGVPhaiziiZZGJZjPcFIobAgaFPuBRldmYp0Vq1mHgcjCv%2Fdif6xrP4EwF3gvwf2O8Yl8A2BCd00DNne1DXJ6uMOFBq7woWNfcX%2Bh9N%2F8kF5nxLgW8aussbOVs%2FnmVXr3IDKqX15MwiTHYr6ztfM3hqWnybPg1mLNQc2LrYwWog5q05cCvHdYDiTMYp0eC00T%2Fa5nLj5PdO1JWxjlN08Ftq1KPQ%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230307T043728Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAVLDLCC74GU56WKKF%2F20230307%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=1e14720ae79ad9a795fe4194654b0fa3b1cd57d2dec8646127daff0074dddb66' type="video/mp4"/>
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
