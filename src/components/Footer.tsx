import React from 'react';

const Footer = () => {
    let date = new Date()
    const year = date.getFullYear()
  return <div>
      <footer>
        <p>Copyright &copy; {year}</p>
      </footer>
  </div>;
};

export default Footer;
