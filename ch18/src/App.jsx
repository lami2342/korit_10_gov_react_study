import { Outlet, Route, Routes } from "react-router";

function MainLayOut() {
  return <>
    <header>
      <Link to={"/"}>홈</Link>
      <Link to={"/introduce"}>소개</Link>
      <Link to={"/about"}>상품 정보</Link>
      <Link to={"/mypage"}>마이페이지</Link>

    </header>
    <main>
      <Outlet />
    </main>
    <footer>
      <h3>
        회사 정보
      </h3>
    </footer>
  </>
}


function App() {

  // outlet
  //서브 라우트를 사용해서 레이아웃을 잡는 방법
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayOut />}>
          <Route path="" element={<>홈화면</>} />
          <Route path="introduce" element={<>소개 화면</>} />
          <Route path="about" element={<>상품정보</>} />
          <Route path="mypage" element={<>마이페이지 화면</>} />
        </Route>
      </Routes>
    </>
  )
}

export default App;