

function App() {

    const getpromise = (name) => {
        return new Promise((resolve, reject) => {
            console.log("프로미스 생성")
            console.log(name)
            if (!!name) {
                resolve(name + "님")
            } else {
                reject(new Error("이름이 입력되지 않았습니다."))
            }
        });

    }

    const getPromise = async () => {
        console.log("프로미스 생성");
        console.log(name);
        if (!!name) {
            return name + "님";
        } else {
            throw new Error("이름이 입력되지 않았습니다.");
        }
    }


    const handle1 = () => {
        const promise1 = getpromise("신동수");
        promise1.then((name) => { console.log(name + "환영합니다") })
            .catch((error) => { console.error(error) })
    }

    const handle2 = () => {
        const promise2 = getpromise("헌동수");
        promise2.then((name) => { console.log(name + "환영합니다") })
            .catch((error) => { console.error(error) })

    }

    return (
        <>
            <button onClick={handle1}>프로미스 생성</button>
            <button onClick={handle2}>프로미스 생성</button>
        </>
    )
}

export default App;