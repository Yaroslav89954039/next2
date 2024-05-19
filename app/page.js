"use client"
import { endpoints } from "./api/config"
import { CardList } from "./components/CardsListSection/CardList"
import { useGetDataByCategory } from "./api/api-hooks";
import { Preloader } from "./components/Preloader/Preloader";
import { Banner } from "./components/Banner/Banner";
import { Promo } from "./components/Promo/Promo";
import { CardsListSection } from "./components/CardsListSection/CardsListSection";


export default function Home() {
  const popularGames = useGetDataByCategory(endpoints.games, 'popular');
  const newGames = useGetDataByCategory(endpoints.games, 'new');
  
  return (
    <main className="main-inner">
      <Banner/>
      {popularGames ? (
      <CardsListSection id="popular" type="slider" title="Популярные" data={popularGames}>
</CardsListSection>
 ) : (
  <Preloader />
)}
 {newGames ? (
      <CardsListSection id="new" type="slider" title="Новые" data={newGames}>
      </CardsListSection>
       ) : (
        <Preloader />
      )}
      <Promo/>
      </main>  
  )
}


  
