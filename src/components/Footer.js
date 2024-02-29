function Footer() {
    return (
      <>
        <footer>
          &copy; {theYear()} Bola Nabil - All rights reserved.
        </footer>
      </>
    );
}

export default Footer;

function theYear() {
    let date = new Date();
    return date.getFullYear();
}
