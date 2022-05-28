import { useRouter } from "next/router";

export function useMoveToPage() {
  const router = useRouter();


  const moveToPage = (page:string) => () => {
    router.push(page);
  };

  return {
    moveToPage,
  };
}
