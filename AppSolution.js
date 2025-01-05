```javascript
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about/*" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

function Home() { 
  return <div>Home</div>;
}

function About() { 
  const location = useLocation();
  useEffect(() => {
    if (location.pathname.endsWith('/')) {
      const newPath = location.pathname.substring(0, location.pathname.length - 1);
      window.location.replace(newPath);
    }
  }, [location]);
  return <div>About</div>;
}

function NotFound() { 
  return <div>Not Found</div>;
}

export default App; 
```