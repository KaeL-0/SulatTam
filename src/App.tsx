import Navbar from './components/Navbar.tsx'
import Footer from './components/Footer.tsx'
import Homepage from './pages/Homepage.tsx'
import SignIn from './pages/SignIn.tsx'
import SignUp from './pages/SignUp.tsx'
import NewArticle from './pages/NewArticle.tsx'
import Settings from './pages/Settings.tsx'
import Profile from './pages/Profile.tsx'
import ViewArticle from './pages/ViewArticle.tsx'
import { Route, Routes } from 'react-router-dom'
import RequireAuth from './components/RequireAuth.tsx'
import RedirectIfAuth from './components/RedirectIfAuth.tsx'

export default function App() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path='/' element={<Homepage />}/>
				<Route path='/login' element={
					<RedirectIfAuth>
						<SignIn />
					</RedirectIfAuth>
				}/>
				<Route path='/register' element={
					<RedirectIfAuth>
						<SignUp />
					</RedirectIfAuth>
				}/>

				<Route path='/editor' element={
					<RequireAuth>
						<NewArticle />
					</RequireAuth>
				}/>

				<Route path='/settings' element={
					<RequireAuth>
						<Settings />
					</RequireAuth>
				}/>

				<Route path='/profile' element={
					<RequireAuth>
						<Profile />
					</RequireAuth>
				}/>

				<Route path='/article' element={
					<RequireAuth>
						<ViewArticle />
					</RequireAuth>
				}/>

			</Routes>
			<Footer />
		</>
		
	)
}