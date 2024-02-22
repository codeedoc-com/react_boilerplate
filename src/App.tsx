import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Container from "screens";
import { Provider } from "react-redux";
import store from "store";
import Loading from "components/common/Loading";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Container />
        <ToastContainer position="bottom-center" />
        <Loading />
      </Provider>
    </BrowserRouter>
  );
}

export default App;
