import React from "react";

const Footer = () => {
  const footerStyle = {
    position: "relative",
    bottom: 0,
    width: "100%",
    backgroundColor: "#333", // Background color
    color: "#fff", // Text color
    textAlign: "center",
    padding: "10px 0",
  };
  return (
      <footer className="bg-dark text-light py-3" style={footerStyle}>
          <p className="text-center">
          Copyright &copy; MyTodosList.com
          </p>
      </footer>
  )
}


export default Footer;
