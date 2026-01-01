const Home = () => {
  return (
    <div className="container mt-5 text-center">
      <h1 className="mb-3">Portfolio Creator App</h1>
      <p className="lead">
        Build, customize, and download your professional portfolio
        using modern frontend technologies.
      </p>

      <div className="mt-4">
        <p>✔ Create portfolio sections</p>
        <p>✔ Live preview</p>
        <p>✔ Edit skills & projects</p>
        <p>✔ Download portfolio as PDF</p>
      </div>

      <a href="#login" className="btn btn-dark mt-3">
        Get Started
      </a>
    </div>
  );
};

export default Home;