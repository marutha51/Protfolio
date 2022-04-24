import { useEffect, useState } from "react"

const useViewPort = () => {
	const [isMobile, setMobile] = useState<boolean>(window.innerWidth <= 600)
	const handleResize = () => {
		setMobile(window.innerWidth <= 600)
	}
	useEffect(()=>{
		window.addEventListener('resize', handleResize)
		return () => window.removeEventListener('resize', handleResize);
	})

	return isMobile;
}

export default useViewPort;