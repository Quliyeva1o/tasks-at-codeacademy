import AdminLayout from "../pages/Admin/AdminLayout";
import AdminProducts from "../pages/Admin/Products";
import UserLayout from "../pages/User/UserLayout";
import AddProduct from "../pages/Admin/AddProduct/index";
import EditProduct from "../pages/Admin/EditProduct";
import Basket from "../pages/User/Basket";
import ProductDetail from "../pages/User/ProductDetail";
import UserProducts from "../pages/User/Products";
import Wishlist from "../pages/User/Wishlist";

export const ROUTES= [
    {
        path: '/admin',
        element: <AdminLayout/>,
        children: [
            {
                index: true,
                element: <AdminProducts/>
            },
            {
                path: 'addproduct',
                element: <AddProduct/>
            },
            {
                path: 'editproduct',
                element: <EditProduct/>
            }
        ]
    },
    {
        path: '',
        element: <UserLayout/>,
        children: [
            {
                index: true,
                element: <Basket/>
            },
            {
                path: 'products',
                element: <UserProducts/>
            },
            {
                path: 'wishlist',
                element: <Wishlist/>
            },
            {
                path: '/product/:id',
                element: <ProductDetail/>
            }
        ]
    }
]