import React from 'react';

const Footer = () => {
	const today = new Date();
	return (
		<div className="">
			<footer className=" md:fixed md:bottom-0 flex mx-auto w-full  items-center justify-center text-orange-400 ">
				<p className="text-sm">
					{' '}
					Copyright AWP Coding &copy; {today.getFullYear()}
				</p>
			</footer>
		</div>
	);
};

export default Footer;
