import './App.css';
import { Fragment } from 'react';
import TopNavigate from './Components/TopNavigate';
import SearchInput from './Components/SearchInput';
import BuyComponent from './Components/BuyComponent';
import BuyUnderComponent from './Components/BuyUnderComponent';
import Slider from './Components/Slider';
import DirectAction from './Components/DirectAction';
import SectionContainer from './Components/SectionContainer';
import RecentOrder from './Components/SectionContainer/RecentOrder';
import TodaySale from './Components/SectionContainer/TodaySale';
import ShoppingLive from './Components/SectionContainer/ShoppingLive';
import DoGift from './Components/SectionContainer/DoGift';
import NationwideTaste from './Components/SectionContainer/NationwideTaste';
import AdBanner from './Components/AdBanner';
import Footer from './Components/Footer';
import DoThis from './Components/SectionContainer/DoThis';

function App() {
  return (
    <Fragment>
      <TopNavigate/>
      <div className='h-16 rounded-b-xl bg-cyan-500'>
        <SearchInput/>
      </div>
      <article className="flex flex-col m-4">
        <div className="flex justify-between mb-3">
        <BuyComponent 
        title="배달" 
        content={
          <>
            <p>세상은 넓고</p>
            <p>맛집은 많다</p>
          </>
        } 
        />
        <BuyComponent
        title="포장" 
        content={
          <>
          <p className="flex ">가까운 가게는</p> 
          <p>직접 가지러 가지요</p>
        </>
        } 
        />
        </div>
        <div className="flex justify-evenly">
        <BuyUnderComponent content="쇼핑라이브"/>
        <BuyUnderComponent content="선물하기"/>
        <BuyUnderComponent content="전국별미"/>
        </div>
      </article>
      <article className="m-4 h-16">
        <Slider/>
      </article>
      <article className="m-4">
        <DirectAction/>
      </article>
      <article>
        <SectionContainer title="최근에 주문했어요" viewText="주문내역 보기">
          <RecentOrder/>
        </SectionContainer>
      </article>
      <article>
        <SectionContainer title="오늘의 할인" viewText="전체 보기">
          <TodaySale/>
        </SectionContainer>
      </article>
      <article>
        <SectionContainer title="배민쇼핑라이브" viewText="전체 보기">
          <ShoppingLive/>
        </SectionContainer>
      </article>
      <article>
        <SectionContainer title="마음을 선물해보세요" viewText="전체 보기">
          <DoGift/>
        </SectionContainer>
      </article>
      <article>
        <SectionContainer title="전국의 별미가 한가득" viewText="전체 보기">
          <NationwideTaste/>
        </SectionContainer>
      </article>
      <article>
        <SectionContainer title="이런 일도 한답니다" viewText="전체 보기">
          <DoThis/>
        </SectionContainer>
      </article>
      <section>
        <AdBanner/>
      </section>
      <section>
        <Footer/>
      </section>
    </Fragment>
  );
}

export default App;
