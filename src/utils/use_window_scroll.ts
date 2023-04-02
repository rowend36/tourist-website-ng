import { ref } from "vue";
import useListener from "./use_listener";

export default function useWindowScroll(){
  const scroll = ref(window.scrollY);
  useListener(window, "scroll", function(e){
    scroll.value = window.scrollY;
  });
  return scroll   ;
}