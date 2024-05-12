

export default function About() {
  return (
    <div>
      <h1 className="text-center">Our Team</h1>
      <section className = "flex justify-evenly items-center align-items-center h-screen mx-60">
        <div>
            <img src="https://s3.amazonaws.com/37assets/svn/765-default-avatar.png" className="rounded-lg h-28"></img>
            <h3>Bryan Alcantara</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum ipsam quidem tempora consequatur, iste nisi repellendus iure nihil, quod deserunt reprehenderit natus, harum voluptas amet totam tenetur sed officiis deleniti!</p>
        </div>
        <div>
            <img src ="https://ca.slack-edge.com/TCVA3PF24-U0640C4HB5L-313b764ada25-192" className="rounded-full h-28"></img>
            <h3>Antonio Martinez</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae nobis aut exercitationem quae, eius maiores deleniti veniam hic officia facere. Nulla ipsa, neque dolore tempore blanditiis quasi ex modi impedit!</p>
        </div>
      </section>
    </div>
  )
}
