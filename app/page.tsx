import { BlogPosts } from 'app/components/posts'
import  AnimatedBox  from 'app/components/AnimatedBox'
import  FullScreenPicture  from 'app/components/FullScreenPicture'
import  VideoFullScreen  from 'app/components/VideoFullScreen'
import  SectionText  from 'app/components/SectionText'
import  VideoPlay  from 'app/components/VideoPlay'
import  Logo  from 'app/components/Logo'

export default function Page() {
  return (
        <section>

    <body>
      
   
               <AnimatedBox />
            <Logo />
                <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        My Portfolio
      </h1>
        <p className="mb-4">
        {`I'm a Vim enthusiast and tab advocate, finding unmatched efficiency in
        Vim's keystroke commands and tabs' flexibility for personal viewing
        preferences. This extends to my support for static typing, where its
        early error detection ensures cleaner code, and my preference for dark
        mode, which eases long coding sessions by reducing eye strain.`}
      </p>
                         
          <VideoPlay />
     
    
      <div className="my-8">
        <BlogPosts />

</body>
         <VideoFullScreen />
          <SectionText />
      </div>
    </section>
  )
}
