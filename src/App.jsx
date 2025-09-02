import NavBarComponent from "./COMPONENTS/NavBarComponent";
import { Route, Routes } from "react-router-dom";
import CarouselSliderComponent from "./COMPONENTS/CarouselSliderComponent";
import ProductsCard from "./COMPONENTS/ProductsCard";
import NewsletterComponent from "./COMPONENTS/NewsletterComponent";
import FruitandvegData from "./ReduxFolder/FruitandvegData";
import Home from "./WEBPAGES/Home";
import WishlistPage from "./WEBPAGES/WishlistPage";
import CartPage from "./WEBPAGES/CartPage";
import ComparePage from "./WEBPAGES/ComparePage";
import ProductGridComponent from "./WEBPAGES/ProductGridComponent";
import FooterComponent from "./COMPONENTS/FooterComponent";
import Searchedcomponent from "./WEBPAGES/Searchedcomponent";
import Authentication from "./WEBPAGES/Authentication";
import SignInPage from "./WEBPAGES/SignInPage";

import NewsPage from "./WEBPAGES/NewsPage";
import TrackOrderPage from "./WEBPAGES/TrackOrderPage";
import StoresPage from "./WEBPAGES/StoreLocationPage";
import SimpleUserDashboard from "./WEBPAGES/UserDashBoard";
import DetailsPage from "./WEBPAGES/DetailsPage";
import ProtectedRout from "./HookComponent/ProtectedRout";

function App() {
  return (
    <>
      <NavBarComponent />
      <FruitandvegData />
      <div className="pageMargin">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:proID" element={<ProductGridComponent />} />
          <Route path="/Searched" element={<Searchedcomponent />} />
          <Route path="/Compare" element={<ComparePage />} />
          <Route path="/Wishlist" element={<WishlistPage />} />
          <Route path="/CartPage" element={<CartPage />} />
           <Route path="/AuthenticationSignUp" element={<Authentication/>} />
          <Route path="/SignInPage" element={<SignInPage />} />
          <Route path="/details/:idparam" element={<DetailsPage/>} />
          <Route path="/news/:newsId" element={<NewsPage/>}/>
          <Route path="/TrackOrder" element={<TrackOrderPage/>}/>
          <Route path="/StoresPage" element={<StoresPage/>}/>
          <Route path="/UserdashBoard" element={<ProtectedRout><SimpleUserDashboard/></ProtectedRout>}/>
          <Route />
        </Routes>
      </div>
      <FooterComponent />
    </>
  );
}

export default App;
