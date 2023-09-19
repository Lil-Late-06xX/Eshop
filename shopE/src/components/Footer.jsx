function Footer() {
    return (
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <p>&copy; {new Date().getFullYear()} PlayGround-Q</p>
            <p>Contact: <a href="/">plgQ@xyz.io</a></p>
          </div>
        </div>
      </footer>
    );
  }
  
  export default Footer;