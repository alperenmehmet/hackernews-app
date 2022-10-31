import '../../styles/footer.scss'

const Footer = () => {
  return (
    <div className="footer" data-testid="footer">
      <div className="footer-line"></div>
      <div className="footer-link">
        <a
          href="https://www.ycombinator.com/apply/"
          data-testid="applications-are-open"
        >
          Applications are open for YC Winter 2023
        </a>
      </div>
      <div className="footer-links">
        <a
          href="https://news.ycombinator.com/newsguidelines.html"
          data-testid="guidelines"
        >
          Guidelines
        </a>
        <span> | </span>
        <a href="https://news.ycombinator.com/newsfaq.html">FAQ</a>
        <span> | </span>
        <a href="https://news.ycombinator.com/lists">Lists</a>
        <span> | </span>
        <a href="https://github.com/HackerNews/API">API</a>
        <span> | </span>
        <a href="https://news.ycombinator.com/security.html">Security</a>
        <span> | </span>
        <a href="https://www.ycombinator.com/legal/">Legal</a>
        <span> | </span>
        <a href="https://www.ycombinator.com/apply/">Apply</a>
        <span> | </span>
        <a href="https://news.ycombinator.com">Contact</a>
      </div>
    </div>
  )
}

export default Footer
