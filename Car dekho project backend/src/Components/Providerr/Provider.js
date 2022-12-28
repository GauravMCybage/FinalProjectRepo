// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Drawer from '@mui/material/Drawer';
// import AppBar from '@mui/material/AppBar';
// import CssBaseline from '@mui/material/CssBaseline';
// import Toolbar from '@mui/material/Toolbar';
// import List from '@mui/material/List';
// import Typography from '@mui/material/Typography';
// import Divider from '@mui/material/Divider';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';

// const drawerWidth = 250;
// const drawerHeight = 400;


// function Provider () {
//     return(
        
//         <div className="main-content">
//             <Box sx={{ display: 'flex' }}>
//       <CssBaseline />
//       <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
//         <Toolbar>
//           <Typography variant="h6" noWrap component="div">
//            Welcome Provider
//           </Typography>
//         </Toolbar>
//       </AppBar>
//       <Drawer
//         variant="permanent"
//         sx={{
//           width: drawerWidth,
//           flexShrink: 0,
//           [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box', height: drawerHeight },
//         }}
//       >
//         <Toolbar />
//         <Box sx={{ overflow: 'auto' }}>
//           <List>
//             {['Profile', 'Update Profile', 'My Order', 'Logout'].map((text, index) => (
//               <ListItem key={text} disablePadding>
//                 <ListItemButton>
//                   <ListItemIcon>
//                     {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//                   </ListItemIcon>
//                   <ListItemText primary={text} />
//                 </ListItemButton>
//               </ListItem>
//             ))}
//           </List>
//           <Divider />
       
//         </Box>
//       </Drawer>
//       <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
//         <Toolbar />
//         <Typography paragraph>
          
//         </Typography>
//         <Typography paragraph>
         
//         </Typography>
//       </Box>
//     </Box>
//     </div>

//     );
// }
// export default Provider;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";

// const Provider = () => {
//   const [Providers, setProvider] = useState([]);

//   useEffect(() => {
    
//     loadProviders();
//   }, []);
//    /*  load the user list*/
//   const loadProviders = async () => {
//     const result = await axios.get("http://localhost:3003/Providers"); //it will get the data

//     setProvider(result.data.reverse());// store the data
//   };

//     // const deleteBuyer = async id => {
//     // await axios.delete(`http://localhost:3003/Buyers/${id}`);
//     // loadBuyer();
//     // };

//   return (
//     <div className="container">
//       <div className="py-4">
//         <h1>Welcome Provider</h1>
//        <table class="table border shadow">
//           <thead class="thead-dark">
//             {/* <tr>
//               <th scope="col">#</th>
//               <th scope="col">Name</th>
//               <th scope="col">User Name</th>
//               <th scope="col">Email</th>
//               <th>Action</th>
//             </tr> */}
//           </thead>
//           <tbody>

              
//             {Providers.map((Provider, index) => (
//               <tr>
//                 <th scope="row">{index + 1}</th>
//                 <td>{Provider.name}</td>
//                 <td>{Provider.username}</td>
//                 <td>{Provider.email}</td>
//                 <td>
//                   <Link class="btn btn-primary mr-2" to={`/Providerr/${Provider.id}`}>
//                     View
//                   </Link>
//                   <Link
//                     class="btn btn-outline-primary mr-2"
//                     to={`/providerr/editprovider/${Provider.id}`}
//                   >
//                     Edit
//                   </Link>
//                     {/* <Link
//                     class="btn btn-danger"
//                     onClick={() => deleteBuyer(Buyer.id)}
//                   >
//                     Delete
//                   </Link>   */}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default Provider;



import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Provider = () => {
  const [Buyers, setBuyer] = useState({});

  useEffect(() => {
    
    loadBuyers();
  }, []);
   /*  load the user list*/
  const loadBuyers = async () => {
    const result = await axios.get("https://localhost:7193/api/Buyer/${buyerId}"); //it will get the data
console.log(result);
    setBuyer(result.data);
    // store the data
  };

    // const deleteBuyer = async id => {
    // await axios.delete(`http://localhost:3003/Buyers/${id}`);
    // loadBuyer();
    // };

  return (
    <div>
   <table class="table">
  <thead>
    <tr>
      <th scope="col">ProviderId</th>
      <th scope="col">ProviderName</th>
      <th scope="col">ProviderMobile</th>
      <th scope="col">ProviderEmail</th>
      <th scope="col">ProviderAddress</th>
      <th scope="col">ProviderCity</th>
    
    </tr>
  </thead>
  <tbody>
   
    <tr>
      <th scope="row">{Buyers.providerId}</th>
      <td>{Buyers.providerName}</td>
      <td>{Buyers.providerMobile}</td>
      <td>{Buyers.providerEmail}</td>
      <td>{Buyers.providerAddress}</td>
      <td>{Buyers.providerAddress}</td>
      <td>{Buyers.providerCity}</td>
     
    </tr>
    <Link
                    class="btn btn-outline-primary mr-2"
                    to={`/providerr/editprovider/${Buyers.providerId}`}
                  >
                    Edit
                  </Link>
                 
  </tbody>
  {/* <ul className="list-group w-50">
        <li className="list-group-item">name: {Buyers.buyerName}</li>
        <li className="list-group-item">user name: {Buyers.buyerMobile}</li>
        <li className="list-group-item">email: {Buyers.buyerEmail}</li>
        <li className="list-group-item">phone: {Buyers.buyerAddress}</li>
        <li className="list-group-item">website: {Buyers.buyerCity}</li>
      </ul> */}
</table>
    </div>
    
  );
};

export default Provider;


