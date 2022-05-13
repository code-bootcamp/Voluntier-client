import { useState } from "react";
import ProductDetailUI from "./ProductDetailPresenter";

export default function ProductDetail() {
  const [isOpen, setIsOpen] = useState(false);

  const onToggleModal = () => {
    setIsOpen((prev) => !prev);
  };

  return <ProductDetailUI isOpen={isOpen} onToggleModal={onToggleModal} />;
}
