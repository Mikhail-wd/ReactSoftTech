import BannerSolutionsImg from "/images/solutions/bannerSolutions.jpg";
import "./BannerSolutions.css";

function BannerSolutions({ title = "Сервер в аренду" }) {
  return (
    <>
      <div className="banneSolutions__box">
        <img
          className="banneSolutions__img-banner"
          src={BannerSolutionsImg}
          alt=""
        />
        <h1 className="banneSolutions__header">{title}</h1>
      </div>
    </>
  );
}

export default BannerSolutions;
