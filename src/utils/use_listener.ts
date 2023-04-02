import { onMounted, onUnmounted, ref } from "vue"

export default function useListener(target: any,event:string, cb:(e:any)=>void){
  const store = ref({cb});
  store.value.cb = cb;
  const _cb = function(this:EventTarget, e:any){
   return store.value.cb.call(this, e);
  }
  onMounted(function(){
    target.addEventListener(event, _cb);
  })
  onUnmounted(function(){
    target.removeEventListener(event,_cb);
  })
}