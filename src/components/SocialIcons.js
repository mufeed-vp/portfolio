const SocialIcons = () => {
  const styles = {
    icon: {
      textDecoration: "none",
      fontSize: "22px",
      padding: "10px",
      transition: "0.2s ease-in",
    },
  };

  return (
    <div className="socialIcons" style={styles.socialIcons}>
      <a className="icon" style={styles.icon} href="https://github.com/mufeed-vp" target="_blank">
        <i className="fa-brands fa-github" aria-hidden="true" title="Mufeed V P' GitHub Profile"></i>
      </a>
      <a className="icon" style={styles.icon} href="https://www.linkedin.com/in/mufeed-vp/" target="_blank">
        <i className="fa-brands fa-linkedin" aria-hidden="true" title="Mufeed V P' LinkedIn Profile"></i>
      </a>
      <a className="icon" style={styles.icon} href="https://www.instagram.com/mf_mufi/" target="_blank" >
        <i className="fa-brands fa-instagram" aria-hidden="true" title="Mufeed V P' Instagram Profile"></i>
      </a>
      {/* <a className="icon" style={styles.icon} href="https://twitter.com/mdyeates">
        <i className="fa-brands fa-twitter" aria-hidden="true" title="Mufeed V P' Twitter Profile"></i>
      </a> */}
    </div>
  );
};

export default SocialIcons;
