import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import {Navbar, Feed, VideoPage, ChannelPage, SearchFeed} from './index';
 
 const App = () =>
 (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/video/:id" element={<VideoPage />} />
        <Route path="/channel/:id" element={<ChannelPage />} />
        <Route path="/search/:query" element={<SearchFeed />} />
      </Routes>
    </BrowserRouter>
  );

export default App;