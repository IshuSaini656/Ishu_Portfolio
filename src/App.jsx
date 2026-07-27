import ErrorBoundary from './utils/Errorboundry'
import Main from './components/Main'
import "./App.css"
function App() {
  return (
    <ErrorBoundary>
      <Main />
    </ErrorBoundary>
  );
}

export default App;