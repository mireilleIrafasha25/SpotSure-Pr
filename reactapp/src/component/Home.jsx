import "../styles/home.css";

const Home = () => {
  return (
    <div className="Main-Home">
      <div className="Home-Content">
        <div className="Home-title"><span>The Best </span><br/> <span>Deals For Parking Lots</span></div>
        <div className="SubHome-content">
        Find secure, affordable, and convenient parking with real-time availability and easy reservations. Book now for a hassle-free experience!
        </div>
        <button className="Book-Button">BOOK NOW</button>
      </div>
    </div>
  );
};

export default Home;
