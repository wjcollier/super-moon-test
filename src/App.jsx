import Main from './components/Main'
import Sidenav from './components/Sidenav'
import Work from './components/Work'
import CustomCursor from './components/CustomCursor'
import Projects from './components/Projects'
import Contact from './components/Contact'
import './App.css'

function App() {
	return (
		<div className='h-screen  overflow-y-scroll  scrollbar-thin  scrollbar-track-orange-500 scrollbar-thumb-black hover:scrollbar-thumb-cyan-400 '>
			<CustomCursor />
			<Sidenav />
			<div className='h-full '>
				<Main />
				<Work />
				<Projects />
				<Contact />
			</div>
		</div>
	)
}

export default App
