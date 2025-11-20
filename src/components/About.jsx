const About = () => {
  return (
    <div className="mainabout">
      <div className="about-content">
        <h1>About Doraemon</h1>
        
        <div className="about-section">
          <div className="about-text">
            <p>
              Doraemon is a blue robotic cat from the 22nd century who travels back in
              time to help a young boy named Nobita. With his magical 4D pocket filled
              with futuristic gadgets, Doraemon tries to guide Nobita through daily
              problems and teach him responsibility.
            </p>
            <p>
              Even though the gadgets sometimes cause funny chaos, their friendship 
              shows kindness, teamwork, and the importance of making good choices. 
              Doraemon has become one of the most loved cartoon characters across the world.
            </p>
          </div>
          
          <div className="about-features">
            <div className="feature-card">
              <h3>🎯 Mission</h3>
              <p>Help Nobita become successful and happy through guidance and futuristic gadgets</p>
            </div>
            
            <div className="feature-card">
              <h3>🕒 Origin</h3>
              <p>22nd century robotic cat sent back in time to change Nobita's future</p>
            </div>
            
            <div className="feature-card">
              <h3>🎒 Speciality</h3>
              <p>4D pocket with endless futuristic gadgets and tools</p>
            </div>
            
            <div className="feature-card">
              <h3>❤️ Values</h3>
              <p>Friendship, kindness, responsibility, and learning from mistakes</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;