import MainUI from "./MainPresenter";

export default function Main() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive:[
      {breakpoint: 1024,
      
      }
    ]
  };

  return (
    <>
      <MainUI settings={settings} />
    </>
  );
}
