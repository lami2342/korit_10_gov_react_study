


function App() {
  new Promise((resolve, reject) => {
    console.log(8);
    if (false) {
      resolve("성공데이터");
    } else {
      reject(new Error("실패데이터"));
    }
  }).then((value) => {
    console.log(9)
    console.log(value)
  }).catch((reason) => {//자신 객체를 지속적으로 return 한다
    console.log(10)
    console.log(Error)
  });
  new Promise((resolve, reject) => {
    console.log(11);
    if (true) {
      resolve("성공데이터");
    } else {
      reject("실패데이터");
    }
  }).then((value) => {
    console.log(9)
    console.log(value)
  }).catch((reason) => {//자신 객체를 지속적으로 return 한다
    console.log(10)
    console.log(reason)
  });

  console.log(1)//10초
  console.log(2)//1시간
  console.log(3)//30분
  console.log(4)//1초
  //동기식으로 작동시 1~4까지가 1시간 30분이 넘게 걸림====비효율적임

  setTimeout(() => {
    console.log(5);
  }, 800);
  setTimeout(() => {
    console.log(6);
  }, 1000);
  setTimeout(() => {
    console.log(7);
  }, 700);


  return (
    <>
      홈

    </>
  )
}

export default App;