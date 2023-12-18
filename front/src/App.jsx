import { useEffect, useState } from "react";
import AppHeader from "./components/AppHeader";
import MainPage from "./components/MainPage";
import { appService } from "./service";
import Loader from "./components/Loader";


export default function App() {

  const [isAdmin, setIsAdmin] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [data, setData] = useState(null)

  useEffect(() => {
    const fetchDataFromAppService = async () => {
      try {
        const result = await appService.getParams();
        console.log('Результат запроса от appService:', result);
        setData(result);
      } catch (error) {
        console.error('Ошибка запроса от appService:', error);
      }
    };

    fetchDataFromAppService();
  }, []);

  function onSave() {
    console.log('save')
    appService.saveParams(data)
    setIsAdmin(false)
  }

  const handleChange = (event, index, type) => {
    if (type === 'header') {
      console.log('hereasd')
      let newHeader = data.header
      newHeader[index] = event.target.value
      setData((prev) => ({
        ...prev,
        header: newHeader,
      }));
    }
    else {
      console.log('here')
      let newCards = data.cards
      newCards[index][type] = event.target.value
      console.log(newCards[index][type], 'NEWWW')
      console.log(newCards)
      setData((prev) => ({
        ...prev,
        cards: newCards,
      }));
    }
  };

  return (
    <div className="App">
      {!data ? <Loader /> :
        <div className="app-container">
          {isOpen ? <div className="background" onClick={() => setIsOpen(false)}></div> : ''}
          <AppHeader contant={data.header} isAdmin={isAdmin} handleChange={handleChange} isOpen={isOpen} setIsOpen={setIsOpen} />
          <MainPage contant={data.cards} isAdmin={isAdmin} handleChange={handleChange} />
          <section className="admin">
            {isAdmin ?
              <span className="admin active" onClick={onSave}>Сохранить</span>
              :
              <span className="admin" onClick={() => setIsAdmin(!isAdmin)}>Админ панель</span>
            }
          </section>
        </div>
      }
      {/* {isAdmin && <Modal />} */}
    </div>
  );
}

