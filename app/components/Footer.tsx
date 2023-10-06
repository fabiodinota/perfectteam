import Image from "next/image";
import React from "react";
import Logo from "../../public/logo_perfectteam.png";

const Footer = () => {
	return (
        <div className="bg-[#0D0D0D] w-full flex justify-center items-center pt-20  flex-col">
            <div className="flex justify-center items-start flex-col gap-5 lg:gap-5 lg:flex-row w-full h-full max-w-[1300px] px-5 pb-5">
                <div className="w-full">
					<Image quality={100} src={Logo} width={80} height={80} alt="Logo" />
				</div>
                <div className="flex flex-col w-full">
                    <h1 className="font-semibold text-[22px]">
                            Adres
                    </h1>
                    <p className="text-[20px]">August Van De Wielelei 95 - 2100 Deurne</p>
                </div>
                <div className="flex flex-col w-full">
                    <h1 className="font-semibold text-[22px] lg:text-right">
                            Contact
                    </h1>
                    <p className="text-[20px] lg:text-right">
                        Email: info@perfectteam.be
                        <br />
                        Telefoon: +32 (0) 472 27 95 94
                    </p>
                </div>
            </div>
            <hr className="h-[1px] w-[90%] max-w-[1300px]" />
            <div className="flex justify-between items-start flex-col gap-5 sm:gap-0 sm:flex-row w-full h-full max-w-[1300px] px-5  pb-5">
                <h1 className="font-thin mt-4 text-[20px]">
                        © Copyright 2019 Perfect Team - All Rights Reserved
                </h1>
                <div className="flex flex-row justify-center items-center gap-0">
                    <a href="https://www.facebook.com/PerfectTeamMMA/">
                        <svg
                                className="w-16 h-16"
                                viewBox="0 0 53 52"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g clipPath="url(#clip0_1_87)">
                                    <path
                                        d="M32.5685 27.6324L33.294 22.9054H28.7583V19.8379C28.7583 18.5446 29.3919 17.2841 31.4233 17.2841H33.4853V13.2595C33.4853 13.2595 31.6141 12.9402 29.825 12.9402C26.0897 12.9402 23.6482 15.2042 23.6482 19.3027V22.9054H19.4961V27.6324H23.6482V39.0596H28.7583V27.6324H32.5685Z"
                                        fill="#B0F945"
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0_1_87">
                                        <rect
                                            width="16.3246"
                                            height="26.1194"
                                            fill="white"
                                            transform="translate(18.3284 12.9402)"
                                        />
                                    </clipPath>
                                </defs>
                        </svg>
                    </a>
                    <a href="https://www.instagram.com/perfectteammma/">
                        <svg
                                className="w-16 h-16"
                                viewBox="0 0 52 52"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g clipPath="url(#clip0_1_88)">
                                    <path
                                        d="M26.6114 20.1332C23.3669 20.1332 20.7498 22.7503 20.7498 25.9948C20.7498 29.2393 23.3669 31.8563 26.6114 31.8563C29.8559 31.8563 32.473 29.2393 32.473 25.9948C32.473 22.7503 29.8559 20.1332 26.6114 20.1332ZM26.6114 29.8056C24.5147 29.8056 22.8006 28.0966 22.8006 25.9948C22.8006 23.893 24.5096 22.184 26.6114 22.184C28.7132 22.184 30.4222 23.893 30.4222 25.9948C30.4222 28.0966 28.7081 29.8056 26.6114 29.8056ZM34.0799 19.8935C34.0799 20.6536 33.4677 21.2606 32.7127 21.2606C31.9526 21.2606 31.3455 20.6485 31.3455 19.8935C31.3455 19.1384 31.9577 18.5263 32.7127 18.5263C33.4677 18.5263 34.0799 19.1384 34.0799 19.8935ZM37.9621 21.2811C37.8754 19.4496 37.4571 17.8274 36.1154 16.4908C34.7788 15.1542 33.1566 14.7359 31.3251 14.6441C29.4376 14.5369 23.7801 14.5369 21.8926 14.6441C20.0662 14.7308 18.444 15.1491 17.1023 16.4857C15.7606 17.8223 15.3474 19.4445 15.2556 21.2759C15.1484 23.1635 15.1484 28.821 15.2556 30.7085C15.3423 32.5399 15.7606 34.1622 17.1023 35.4988C18.444 36.8354 20.0611 37.2537 21.8926 37.3455C23.7801 37.4526 29.4376 37.4526 31.3251 37.3455C33.1566 37.2588 34.7788 36.8405 36.1154 35.4988C37.452 34.1622 37.8703 32.5399 37.9621 30.7085C38.0692 28.821 38.0692 23.1686 37.9621 21.2811ZM35.5236 32.7338C35.1257 33.7337 34.3554 34.504 33.3504 34.907C31.8455 35.5039 28.2745 35.3661 26.6114 35.3661C24.9483 35.3661 21.3722 35.4988 19.8724 34.907C18.8725 34.5091 18.1022 33.7388 17.6992 32.7338C17.1023 31.2289 17.24 27.6579 17.24 25.9948C17.24 24.3317 17.1074 20.7556 17.6992 19.2558C18.0971 18.2559 18.8674 17.4856 19.8724 17.0826C21.3773 16.4857 24.9483 16.6234 26.6114 16.6234C28.2745 16.6234 31.8506 16.4908 33.3504 17.0826C34.3503 17.4805 35.1206 18.2508 35.5236 19.2558C36.1205 20.7607 35.9828 24.3317 35.9828 25.9948C35.9828 27.6579 36.1205 31.234 35.5236 32.7338Z"
                                        fill="#B0F945"
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0_1_88">
                                        <rect
                                            width="22.8545"
                                            height="26.1194"
                                            fill="white"
                                            transform="translate(15.1791 12.9402)"
                                        />
                                    </clipPath>
                                </defs>
                        </svg>
                    </a>
                    <a href="https://www.youtube.com/PERFECTTEAMmma">
                        <svg
                            className="w-16 h-16"
                            viewBox="0 0 53 52"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M39.8016 19.2702C39.4811 18.0637 38.5371 17.1135 37.3384 16.791C35.1657 16.2051 26.4534 16.2051 26.4534 16.2051C26.4534 16.2051 17.7411 16.2051 15.5684 16.791C14.3697 17.1135 13.4256 18.0637 13.1052 19.2702C12.523 21.457 12.523 26.0196 12.523 26.0196C12.523 26.0196 12.523 30.5823 13.1052 32.7691C13.4256 33.9756 14.3697 34.8862 15.5684 35.2087C17.7411 35.7946 26.4534 35.7946 26.4534 35.7946C26.4534 35.7946 35.1656 35.7946 37.3384 35.2087C38.5371 34.8862 39.4811 33.9756 39.8016 32.7691C40.3837 30.5823 40.3837 26.0196 40.3837 26.0196C40.3837 26.0196 40.3837 21.457 39.8016 19.2702ZM23.604 30.1622V21.8771L30.8857 26.0198L23.604 30.1622Z"
                                fill="#B0F945"
                            />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Footer;
