import React from 'react'
import { Grid } from 'react-loader-spinner'
import { LoaderStyle } from './Loader.styled'

const Loader = () => {

	return (
		<LoaderStyle.LoaderContainer>
			<Grid
				height='100'
				width='100'
				color='#5ba85e'
				wrapperStyle={{}}
				wrapperClass=''
				visible={true}
				outerCircleColor=''
				innerCircleColor=''
				barColor=''
				ariaLabel='circles-with-bar-loading'
			/>
		</LoaderStyle.LoaderContainer>
	)
}
export default Loader;