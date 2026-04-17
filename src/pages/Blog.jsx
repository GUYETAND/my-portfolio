import { Link } from 'react-router-dom';

function Blog() {
  return (
    <div className="blog-page">
      <h1>Blog</h1>
      <Link to="/" className="back-link">&larr; Back to Home</Link>

      {/* Spring break travel blog post */}
      <article className="blog-post">
        <h2>Spring Break 2026: A Week in Las Vegas</h2>
        <span className="blog-date">March 15, 2026</span>
        <p>
          This spring break, I flew out to Las Vegas with a few friends from
          Epitech. None of us had been before, so it was a completely new
          experience. Our first night on the Strip was unforgettable — the
          New York-New York hotel with its replica of the Statue of Liberty
          all lit up in neon, the rollercoaster looping above the casino
          entrance, and the palm trees everywhere. It felt like walking
          through a movie set.
        </p>
        <img
          src="/my-portfolio/vegas2.jpg"
          alt="New York-New York Hotel on the Las Vegas Strip at night"
          className="blog-image"
        />
        <p>
          We spent the next few days walking up and down the Strip, exploring
          the themed hotels. One of my favorites was Paris Las Vegas — the
          Eiffel Tower replica dominates the skyline and at night the whole
          area glows with warm lights. There's even a giant hot air balloon
          sign and the casino facades look straight out of a Parisian
          boulevard. You can literally stand on one street corner and see
          New York, Paris and Venice all at once.
        </p>
        <img
          src="/my-portfolio/vegas3.jpg"
          alt="Paris Las Vegas and the Eiffel Tower replica at night"
          className="blog-image"
        />
        <p>
          The real adventure though was our road trip out of the city. We
          rented a car and drove into the desert toward the Grand Canyon. The
          landscape shifted from neon chaos to complete silence — just arid
          terrain, rugged reddish-brown mountains stretching to the horizon,
          and endless straight roads. We pulled over at one point just to
          take it all in. The Grand Canyon itself was the most breathtaking
          thing I've ever seen — no photo can do it justice.
        </p>
        <img
          src="/my-portfolio/vegas1.jpg"
          alt="Desert road trip toward the Grand Canyon"
          className="blog-image"
        />
        <p>
          Vegas was an amazing break from classes. I didn't touch my laptop
          once, which was probably for the best. Now it's back to reality —
          finals are coming up and I've got a lot of catching up to do!
        </p>
      </article>
    </div>
  );
}

export default Blog;
