import React from 'react';
import {Link, Outlet, useLocation, useNavigate} from 'react-router-dom';

export const Navbar = () => {

    const {state} = useLocation();
    const navigate = useNavigate();

    console.log(status);

    const onLogout = () => {
        navigate('/login', {
            replace: true,
        });
    };

    const onImage = () => {
        navigate('/sorpresa', {
            replace:true,
            state: {
				logged: true,
			},
        });
    };

    const onVideo = () => {
        navigate('/video', {
            replace:true,
            state: {
				logged: true,
			},
        });
    };
    const onDash = () => {
        navigate('/dashboard', {
            replace:true,
            state: {
				logged: true,
			},
        });
    };

    return (
        <>
        
           <header>
                <h1>
                    <Link to='/'>Logo</Link>
                </h1>

				{state?.logged ? (
					<div className='user'>
						<span className='username'>{state?.name}</span>
						<button className='btn-logout' onClick={onLogout}>
							Cerrar sesión
						</button>
                        <button className='btn-carding' onClick={onVideo}>
							Video
						</button>
                        <button className='btn-carding' onClick={onImage}>
							Imagen
						</button>
                        <button className='btn-carding' onClick={onDash}>
							Dash
						</button>
                      
					</div>
				) : (
					<nav>
						<Link to='/login'>Iniciar sesión</Link>
						<Link to='/register'>Registrarse</Link>
                        
					</nav>
				)}
           </header>

           <Outlet/>
        </>
    )
}




}



