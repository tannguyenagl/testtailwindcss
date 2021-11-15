import type { NextPage } from "next";
import dynamic from 'next/dynamic'

// import ListPhim from "../components/listphim";

const DynamicListPhim = dynamic(
  () => import('../components/listphim'),
  { ssr:false,loading: () => <p>Loading</p> }
)


import Trailer from "../components/trailer";

const Home: NextPage = () => {
  const listPhim = [
    {
      thumnail:
        "https://luv.vn/wp-content/uploads/2021/08/hinh-anh-gai-xin2.jpg",
      id: "1",
    },
    {
      thumnail:
        "https://luv.vn/wp-content/uploads/2021/08/hinh-anh-gai-xinh-2.jpg",
      id: "ư",
    },
    {
      thumnail:
        "https://luv.vn/wp-content/uploads/2021/08/hinh-anh-gai-xinh-2.jpg",
      id: "s",
    },
    {
      thumnail:
        "https://luv.vn/wp-content/uploads/2021/08/hinh-anh-gai-xinh-2.jpg",
      id: "ád",
    },
    {
      thumnail:
        "https://luv.vn/wp-content/uploads/2021/08/hinh-anh-gai-xinh-2.jpg",
      id: "sad",
    },
    {
      thumnail:
        "https://luv.vn/wp-content/uploads/2021/08/hinh-anh-gai-xinh-2.jpg",
      id: "ádf",
    },
    {
      thumnail:
        "https://luv.vn/wp-content/uploads/2021/08/hinh-anh-gai-xinh-2.jpg",
      id: "ll",
    },
    {
      thumnail:
        "https://luv.vn/wp-content/uploads/2021/08/hinh-anh-gai-xinh-2.jpg",
      id: "ppp",
    },
    {
      thumnail:
        "https://luv.vn/wp-content/uploads/2021/08/hinh-anh-gai-xinh-2.jpg",
      id: "555",
    },
    {
      thumnail:
        "https://luv.vn/wp-content/uploads/2021/08/hinh-anh-gai-xinh-2.jpg",
      id: "mmmm",
    },
    {
      thumnail:
        "https://luv.vn/wp-content/uploads/2021/08/hinh-anh-gai-xinh-2.jpg",
      id: "pll",
    },
  ];
  return (
    <div className="overflow-x-hidden">
      <Trailer />
      <div className="pl-[50px]">
      {/* <ListPhim listPhim={listPhim} title="Phim Siêu Hay" /> */}


      <DynamicListPhim listPhim={listPhim} title="Phim Siêu Hai" />
      <div style={{ height: "5000px" }}></div>


      </div>
    </div>
  );
};

export default Home;
