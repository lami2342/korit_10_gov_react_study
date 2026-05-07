import REGEX from './constant/regx'

export function useInput(initValue){
  const [inputValues, setInputValues] = useState(initValue);

  const [isValid, setValid] = useState(false);


    useEffect(() => {
    const entries = Object.entries(inputValues);
    const validList = entries.filter(([key, value]) => {
      const regex = REGEX[key];
      if (!regex) return true;
      return regex.test(value);
    });

    // return 대신 setValid로 상태 업데이트
    setValid(validList.length === entries.length);

  }, [inputValues]);

  const handleInputOnChange = (e) => {
    const { name, value } = e.target;

    setInputValues({
      ...inputValues,
      [name]: value,
    })
  }
}