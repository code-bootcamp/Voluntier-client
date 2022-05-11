import MainUI from "./MainPresenter";

export default function Main() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <MainUI settings={settings} />
    </>
  );
}
