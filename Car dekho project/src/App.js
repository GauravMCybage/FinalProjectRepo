import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom/'
import Header from './Components/Headerr/Header';
import Footer from './Components/Footerr/Footer';
import Home from './Components/Pages/Home/Home';
import SellerSignin from './Components/Signin/SellerSignin';
import ProviderSignin from './Components/Signin/ProviderSignin';
import BuyerSignin from './Components/Signin/BuyerSignin';

import BuyerRegister from './Components/Signup/BuyerRegister';
import SellerRegister from './Components/Signup/SellerRegister';
import ProviderRegister from './Components/Signup/ProviderRegister';
import Aboutus from './Components/Pages/About/Aboutus';
import Contactus from './Components/Pages/Contactus';
import Review from './Components/Pages/Review';
import Offers from './Components/Pages/Offers';
import Buyer from './Components/Buyerr/Buyer';
import Seller from './Components/Sellerr/Seller';
import Provider from './Components/Providerr/Provider';
// import Updateprofile from './Components/Buyerr/Updatebuyer/Updateprofile';
import Viewprofile from './Components/Buyerr/Viewprofile';
import EditBuyer from './Components/Buyerr/EditBuyer';
import EditProvider from './Components/Providerr/EditProvider';
import Viewprovider from './Components/Providerr/Viewprovider';
// import Seller from './Components/Sellerr/Seller';
import EditSeller from './Components/Sellerr/EditSeller';
import Viewseller from './Components/Sellerr/Viewseller';
import Cart from  './Components/Cartt/Cart';

import DeleteBuyer from './Components/AdminPages/DeleteBuyer';
import DeleteProvider from './Components/AdminPages/DeleteProvider';
import DeleteSeller from './Components/AdminPages/DeleteSeller';

import Viewbuyer from './Components/AdminPages/Viewbuyer';
import ViewProviders from './Components/AdminPages/Viewproviders';
import Viewsellers from './Components/AdminPages/Viewsellers';

import NewDetails from './Components/AdminPages/NewDetails';
import UsedDetails from './Components/AdminPages/UsedDetails';
// admin import are addded
import Admin from './Components/AdminPages/Admin'
import AdminSignin from './Components/Signin/AdminSignin';


 
function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Header/>
        <Routes>

          <Route path='/' element={<Home/>}/>
          <Route path='/signin/seller-signin' element={<SellerSignin/>}/>
          <Route path='/signin/provider-signin' element={<ProviderSignin/>}/>
          <Route path='/signin/buyer-signin' element={<BuyerSignin/>}/>
         
          <Route path='/signup/buyer-register' element={<BuyerRegister/>}/>
          <Route path='/signup/seller-register' element={<SellerRegister/>}/>
          <Route path='/signup/provider-register' element={<ProviderRegister/>}/>


          <Route path='Pages/Aboutus' element={<Aboutus/>}/>
          <Route path='Pages/Contactus' element={<Contactus/>}/>
          <Route path='Pages/Offers' element={<Offers/>}/>
          <Route path='Pages/Review' element={<Review/>}/>
          <Route path='Buyerr/Buyer' element={<Buyer/>}/>
          <Route path='Sellerr/Seller' element={<Seller/>}/>
          <Route path='Providerr/Provider' element={<Provider/>}/>
         
         
          {/* <Route path='/buyerr/updatebuyer/updateprofile' element={<Updateprofile/>}/> */}
          <Route path='/buyerr/viewprofile' element={<Viewprofile/>}/>
          <Route path='/buyerr/editbuyer/:Id' element={<EditBuyer/>}/>
          <Route path='/providerr/viewprofile' element={<Viewprovider/>}/>
          <Route path='/providerr/editprovider/:id' element={<EditProvider/>}/>
          <Route path='Sellerr/Seller' element={<Seller/>}/>
          <Route path='/viewSeller' element={<Viewseller/>}/>
          <Route path='/Sellerr/editSeller/:id' element={<EditSeller/>}/>
          <Route path='Cartt/Cart' element={<Cart/>}/>



         {/* admin pages routing   update , delete */}
         <Route path='/signin/Admin-signin' element={<AdminSignin/>}/>
         <Route path='/admin' element={<Admin/>}/>
          <Route path='/admin/deletebuyer' element={<DeleteBuyer/>}/>
          <Route path='/admin/deleteCarprovider' element={<DeleteProvider/>}/>
          <Route path='/admin/deleteseller' element={<DeleteSeller/>}/>
          <Route path='/admin/viewbuyer' element={<Viewbuyer/>}/>
          <Route path='/admin/viewprovider' element={<ViewProviders/>}/>
          <Route path='/admin/viewseller' element={<Viewsellers/>}/>
          <Route path='/admin/changeNewCardtil' element={<NewDetails/>}/>
          <Route path='/admin/changeUseCardtil' element={<UsedDetails/>}/>
          








        </Routes>
        <Footer/>     

      </BrowserRouter>
    </div>
  );
}

export default App;
