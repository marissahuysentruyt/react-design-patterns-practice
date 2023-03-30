function App() {
  return (
    <>
      <header className="header">
        <h1>hello 👋</h1>
      </header>
      <article className="description">
        <h2 className="description__heading">here's how this works ⚠️</h2>
        <p className="description__how-it-works">
          In this repo, you'll have to navigate between branches. Each branch of this repo corresponds to a common design pattern, based on the sections of <a href="https://www.linkedin.com/in/shaun-wassell/">Shaun Wassell</a>'s <a href="https://www.linkedin.com/learning/react-design-patterns">React: Design Patterns course</a>. 
        </p>
        <section className="description__instructions">
          <p>
            With the project running locally, switch branches to see more in-depth examples of each design pattern.
          </p>
          <ul className="description__list">
            <li><code>cmp--layouts</code></li>
            <li><code>cmp--containers</code></li>
            <li><code>cmp--controlled-vs-uncontrolled</code></li>
            <li><code>cmp--higher-order-components</code></li>
            <li><code>cmp--custom-hooks</code></li>
            <li><code>cmp--functional-design-patterns</code></li>
          </ul>
        </section>
        <p>Each branch will then have a new README that has my understanding of each pattern.</p>
      </article>
      <article className="context">
        <h2 className="context__heading">why this repo exists ❓</h2>
        <p className="context__background">
          I didn't have a great grasp of React before I got my first developer role. Thankfully, I had some unassigned time when I started, so I decided I would try to bolster my React understanding. This course was really helpful for me in understanding how to break down components, how to get them to interact in more predictable ways, how data flows between components, and overall helped me see an application in a different light. 
        </p>
      </article>
      
      <aritcle className="cta">
        <h2 className="cta__heading">keep learning! 🤓</h2>
        <p className="cta__good-luck">
          This repo is not <span className="cta__span">everything</span> on design patterns or React. But after going through Shaun's course, I felt like I had learned a lot, and felt myself looking at projects a little differently! As a self-taught dev, I want to share what helped me make the connections for others trying to do the same thing.
        </p>
      </aritcle>
    </>
  )
}

export default App;

