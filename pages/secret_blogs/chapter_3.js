import HeadTag from '../../components/HeadTag';

import Header from '../../components/Header';
import SubscribeSection from '../../components/Subscribe';
import Loader from '../../components/Loader';
import Footer from '../../components/Footer';

import BlogPostHeader from '../../components/BlogPostHeader';

import postData from '../../public/data/secret_blogs/chapter_3.json';

export default function ChapterThree() {
  const post =
    <div>
      <h2 className="lead">Welcome to ground zero, Jiana!</h2>
      <p>The first thing I decided to work on was my body. I had come back from a holiday trip to Vancouver with Stephen a couple of weeks ago being a little tubbier, as I have been for a while now. 2018 was my fattest year and at this point I had really given up on my body.&nbsp;</p>
      <p>I&rsquo;ve never loved my body. By no means was it the worst but I had never had the body that I wanted and until now, I was okay with that. I just figured, well I&rsquo;m already a smoker or vaper or overall unhealthy person, so what&rsquo;s the point? I love food, and really I just don&rsquo;t care about my &nbsp;body.</p>
      <p>But this year something was different. I wasn&rsquo;t addicted to nicotine anymore, and I had been around the influence of someone who regularly exercised and mostly ate properly. I decided, why not try to lose a few pounds?</p>
      <p>So on January 22, 2020 I weighed myself for the first time in years, and hated what I saw. I had severely underestimated my weight and I was a lot heavier than I thought I was going to be, and it sure as heck wasn&rsquo;t from muscle. That&rsquo;s when I started tracking my food. I tracked every single thing I ate and looked up roughly what my diet should be like in order to lose weight.</p>
      <p>This went well for a few months, and I was slowly dropping pounds, until I started to plateau. So my weight wasn&rsquo;t dropping too much, but my calories were already pretty low? What do I do? I thought the best and fastest way to do this would be to just decrease even further. And throw in some cardio to help do that even more. I did so up until I was averaging about 800 calories a day and not losing anymore weight.</p>
      <p>That&rsquo;s when I decided, &ldquo;Alright, this is enough. I have to do something about this because clearly I&rsquo;m doing something wrong.&rdquo; Again, I turned to all my resources, namely the internet and Youtube, and discovered the concept of reverse dieting.</p>
      <p>I started implementing everything pretty much that MissFitAndNerdy from Youtube said about reverse dieting and I watched the magic happen. I got super excited being able to eat more and got really meticulous about calories per week and meal planning every week and was very diligent about the whole thing. And it worked! I increased my calories all the way up to about 2300, started incorporating strength training, and I was still dropping pounds!</p>
      <p>This was during the time of quarantine so it was a bit difficult but fortunately, my parents had home equipment that was able to get me started. I did this up until I was resistance training almost every day and eating my maintenance calories and enjoying the heck out of it.</p>
      <p>This reverse diet process didn&rsquo;t only help me &ldquo;fix&rdquo; my metabolism though. It opened my eyes up to a new type of person that I wanted to be. I wanted to be a person that fills my body with things that were good for it and had muscles and overall good health. Not just ground zero health. Good.</p>
      <p>I started to aim higher because I was seeing the effects of my daily habits and they were paying off. I was getting slimmer but it was just a byproduct of wanting my body to work and feel optimally. I started&hellip; giving it love. Something it had never gotten from me before, and it was soaking it all up.</p>
      <p>I no longer cared much about the number on the scale as much as the well-being of my body (and of course, how it looked) and mind.</p>
      <p>My initial taste of freedom opened this world of opportunity to start becoming this upgraded version of myself who was strong, and who no longer only prioritized pleasure and convenience to fuel her body.</p>
      <p>I know it&rsquo;s been said by all the professionals out there, but it&rsquo;s amazing first hand to see what you can accomplish just as a byproduct of living a healthier lifestyle.</p>
      <p>Along the way, I did struggle. Being a person who loved the greasiest, the unhealthiest, the sweetest, and the foodiest of foods, was I letting go of a trait that I loved about myself? I had doubts because the thought of having to &ldquo;let go&rdquo; of that person crossed my mind. But I quickly learned that I never had to let go of anything, I still indulge when I feel it, but my cravings and needs have genuinely changed because what my body craves the most is to feel good. And now it knows what it needs to get there.</p>
      <p>That greasy, unhealthy, sweet, and foodie girl is still in there, but now she just feeds for the soul, and in moderation.</p>
      <p>I couldn&rsquo;t have done all of this without the positive influence of Stephen, who has always been the type to take care of his body and eat in moderation. When he told me that pizza was only reserved for weekends and exposed me to his self-control habits, I was baffled at first, but realized that it&rsquo;s the way he&rsquo;s remained healthy and fit. And now that I was freed from my bad habits, I had room to take on some good ones. Being around him as an influence was incredibly impactful on my progress.</p>
      <p>I look back now on the girl who said, “Physical activity? Yeah I don’t do that.” And I smile, because if she knew who I was now, I don’t think we’d get along. She’d probably think I have a stick up my butt and am not living for the good stuff. But that’s okay, because that only tells me that I’m moving in the right direction.
      <p>Ladies and gentlemen, she has finally gotten to level one.</p>
    </div>

  return (
    <div className="container">
      <HeadTag pageTitle={`JIANA - ${postData.title}`}/>
      <Header/>
      <div className='body' data-spy="scroll" data-target=".site-navbar-target" data-offset="300">
        <div className="site-section">
          <div className="container">
            <div className="row">
              <BlogPostHeader title={postData.title} date={postData.date} readTime={postData.readTime} subtitle={postData.subtitle}/>
              { post }
            </div>
          </div>
        </div>
      </div>
      <SubscribeSection/>
      <Loader/>
      <Footer/>
    </div>
  )
}