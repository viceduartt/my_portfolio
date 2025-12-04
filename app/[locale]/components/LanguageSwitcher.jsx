"use client";

const iconBr = "/icons/br.svg"; 
const iconFr =  "/icons/fr.svg";
const iconUs = "/icons/us.svg";

import {useLocaleStore} from "@/store/useLocaleStore";
import {useRouter, usePathname} from "next/navigation";

export function LanguageSwitcher() {
  const {setLocale} = useLocaleStore();
  const router = useRouter();
  const pathname = usePathname();

  const changeLocale = (newLocale) => {
    const audio = document.querySelector(".musicPlayer")
    const btnMenu = document.querySelector(".btn-menu")

    btnMenu.dataset.showmenu = "true"
    
    sessionStorage.setItem('audio', JSON.stringify({ 
      currentTime: audio.currentTime,
      duration: audio.duration,
      play: audio.dataset.play,
      changeLang: true,
    }))

    setLocale(newLocale);             
    
    const segments = pathname.split("/");
    segments[1] = newLocale; 
    
    router.push(segments.join("/"));
  };

  return (
    <>
      <button onClick={() => {changeLocale("en")}} className="button-lang" data-lang="en"><img src={iconUs} alt="" /></button>
      <button onClick={() => {changeLocale("fr")}} className="button-lang" data-lang="fr"><img src={iconFr} alt="" /></button>
      <button onClick={() => {changeLocale("pt")}} className="button-lang" data-lang="pt"><img src={iconBr} alt="" /></button>
    </>
  );
}
