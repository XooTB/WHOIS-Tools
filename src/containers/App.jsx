import "../styles/App.css";
import { Routes, Route } from "react-router-dom";
import Whois from "./pages/Whois";
import Home from "./pages/Home";
import IPWhois from "./pages/IPWhois";
import Navbar from "./Navbar";
import Footer from "./Footer";
import WhoisResults from "./pages/whoisResults";
import IPResults from "./pages/IPResults";
import MyIP from "./pages/MyIp";
// import DnsInfo from "./pages/DnsInfo";
// import DnsResults from "./pages/DnsResults";

// Context Imports

function App() {
  return (
    <div className="App">
      <Navbar />
      <main className="main">
        <Routes>
          {/* Default Main Pages */}
          <Route path="/" exact element={<Home />} />
          <Route path="/whois" exact element={<Whois />} />
          <Route path="/ipsearch" exact element={<IPWhois />} />

          {/* Main Function Results */}
          <Route path="/whois/:domain" exact element={<WhoisResults />} />
          <Route path="/ipwhois/:ip" exact element={<IPResults />} />

          {/* Other Function Results */}
          <Route path="/myip" exact element={<MyIP />} />

          {/* <Route path="/dnsinfo" exact element={<DnsInfo />} />
          <Route path="/dnsinfo/:domain" exact element={<DnsResults />} /> */}
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
