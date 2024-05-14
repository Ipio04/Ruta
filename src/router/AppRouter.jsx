import {Route, Routes} from 'react-router-dom'
import {Navbar} from "../Navbar";
import { HomePage, DashboardPage, LoginPage, RegisterPage} from "../pages";
import Page from '../pages/Private2';
import { PrivateRoute } from './PrivateRoute1';
import Video from '../pages/Private3';
import Blog from '../pages/Blog';

export const AppRouter = () => {
    return <>
        <Routes>
            <Route path="/" element={<Navbar />}>
                 <Route index element={<HomePage />} />
                 <Route path='login' element ={<LoginPage />}/>
                 <Route path='register' element ={<RegisterPage />}/>
                 <Route path='dashboard' element ={<PrivateRoute><DashboardPage /></PrivateRoute>}/>
                 <Route path='sorpresa' element ={<PrivateRoute><Page /></PrivateRoute>}/>
                 <Route path='video' element ={<PrivateRoute><Video /></PrivateRoute>}/>
                 <Route path='blog' element ={<Blog />}/>
            </Route>

        </Routes>
    </>
}