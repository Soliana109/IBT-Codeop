import HomeHero from "../components/HomeHero"
import ScrollReveal from "../components/common/ScrollReveal"
import HomeAbout from "../components/HomeAbout"
import HomeSkill from "../components/HomeSkill"
import HomeProjects from "../components/HomeProjects"

function Home() {
  return (
    <>
        
        <ScrollReveal>
          <HomeHero />
          <HomeAbout />
          <HomeSkill />
          <HomeProjects />
          </ScrollReveal>
     
        
      
    </>
  )
}

export default Home