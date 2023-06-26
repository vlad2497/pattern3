import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "src/store";

import Main from "src/pages/main";
import Form from "src/pages/form";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/form" element={<Form />} />
          <Route path="*" element={<Main />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
