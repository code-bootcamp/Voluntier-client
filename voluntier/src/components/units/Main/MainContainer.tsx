import { useMoveToPage } from "../../commons/hooks/useMoveToPage";
import MainUI from "./MainPresenter";

export default function Main() {
  const settings = {
    dots: false,
    fade: true,
    speed: 3000,
    infinite: true,
    // autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [{ breakpoint: 1024 }],
    arrows: false,
  };

  const { moveToPage } = useMoveToPage();

  return (
    <>
      <MainUI settings={settings} moveToPage={moveToPage} />
    </>
  );
}
