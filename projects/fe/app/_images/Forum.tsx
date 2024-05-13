import React from "react";

interface ForumProps {
    className?: string;
    isActive: boolean;
    dotsColor?: string;
}

const Forum: React.FC<ForumProps> = (props) => {
    return (
        <>
            <svg
                className={`${props.isActive === true && "hidden"} ${
                    props.className
                }`}
                width={30}
                height={29}
                viewBox="0 0 30 29"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g clipPath="url(#clip0_201_82304)">
                    <path
                        d="M6.09009 26.6109C7.67212 26.6109 10.9065 25.0171 13.2854 23.3179C21.4534 23.5406 27.5823 18.8531 27.5823 12.7124C27.5823 6.81787 21.6761 2.06006 14.2933 2.06006C6.9104 2.06006 1.00415 6.81787 1.00415 12.7124C1.00415 16.5562 3.46509 19.9663 7.16821 21.6773C6.64087 22.6968 5.65649 24.0796 5.12915 24.771C4.50806 25.5913 4.88306 26.6109 6.09009 26.6109ZM7.32056 24.6656C7.22681 24.7007 7.19165 24.6304 7.25024 24.5484C7.90649 23.7398 8.84399 22.521 9.24243 21.771C9.57056 21.1617 9.48853 20.6226 8.73853 20.271C5.05884 18.5601 2.94946 15.8296 2.94946 12.7124C2.94946 7.90772 7.97681 3.99365 14.2933 3.99365C20.6213 3.99365 25.6487 7.90772 25.6487 12.7124C25.6487 17.5054 20.6213 21.4195 14.2933 21.4195C14.0589 21.4195 13.6956 21.4078 13.2269 21.396C12.7347 21.396 12.3597 21.5484 11.9144 21.8999C10.4729 22.9429 8.38696 24.232 7.32056 24.6656Z"
                        fillOpacity="0.85"
                    />
                    <path
                        d="M19.7659 14.5171C20.7034 14.5171 21.465 13.7554 21.465 12.8179C21.465 11.8804 20.7034 11.1187 19.7659 11.1187C18.8284 11.1187 18.0667 11.8804 18.0667 12.8179C18.0667 13.7554 18.8284 14.5171 19.7659 14.5171Z"
                        fillOpacity="0.85"
                    />
                    <path
                        d="M14.2933 14.5171C15.2308 14.5171 15.9925 13.7554 15.9925 12.8179C15.9925 11.8804 15.2308 11.1187 14.2933 11.1187C13.3558 11.1187 12.594 11.8804 12.594 12.8179C12.594 13.7554 13.3558 14.5171 14.2933 14.5171Z"
                        fillOpacity="0.85"
                    />
                    <path
                        d="M8.83227 14.5171C9.75806 14.5171 10.5198 13.7554 10.5198 12.8179C10.5198 11.8804 9.74634 11.1187 8.83227 11.1187C7.89477 11.1187 7.13306 11.8804 7.13306 12.8179C7.13306 13.7554 7.89477 14.5171 8.83227 14.5171Z"
                        fillOpacity="0.85"
                    />
                </g>
                <defs>
                    <clipPath id="clip0_201_82304">
                        <rect
                            width="26.5781"
                            height="24.5508"
                            transform="translate(1.00415 2.06006)"
                        />
                    </clipPath>
                </defs>
            </svg>

            <svg
                className={`${props.isActive === false && "hidden"} ${
                    props.className
                }`}
                width={30}
                height={29}
                viewBox="0 0 30 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g clipPath="url(#clip0_201_82313)">
                    <path
                        d="M4.64697 24.4937C6.05323 24.4937 9.55713 22.9585 11.5493 21.5289C11.7485 21.3882 11.9125 21.3296 12.0766 21.3296C12.229 21.3413 12.3813 21.3531 12.5336 21.3531C20.9829 21.3531 26.5844 16.5484 26.5844 10.7124C26.5844 4.81787 20.6782 0.0600586 13.2954 0.0600586C5.9126 0.0600586 0.00634766 4.81787 0.00634766 10.7124C0.00634766 14.4624 2.31494 17.7554 6.07666 19.771C6.25244 19.8648 6.31104 20.0406 6.21729 20.2163C5.56104 21.2945 4.38916 22.5835 3.94385 23.1695C3.48682 23.7554 3.74463 24.4937 4.64697 24.4937Z"
                        // fill="#dfff32"
                        // fillOpacity="0.85"
                    />
                    <path
                        d="M18.9438 12.5757C17.9711 12.5757 17.186 11.7906 17.186 10.8179C17.186 9.84522 17.9711 9.06006 18.9438 9.06006C19.893 9.06006 20.7016 9.84522 20.7016 10.8179C20.7016 11.7906 19.893 12.5757 18.9438 12.5757Z"
                        className={props.dotsColor}
                    />
                    <path
                        d="M13.2955 12.5757C12.3228 12.5757 11.5376 11.7906 11.5376 10.8179C11.5376 9.84522 12.3228 9.06006 13.2955 9.06006C14.2681 9.06006 15.0533 9.84522 15.0533 10.8179C15.0533 11.7906 14.2681 12.5757 13.2955 12.5757Z"
                        className={props.dotsColor}
                    />
                    <path
                        d="M7.65869 12.5757C6.69776 12.5757 5.90088 11.7906 5.90088 10.8179C5.90088 9.84522 6.69776 9.06006 7.65869 9.06006C8.60791 9.06006 9.40479 9.84522 9.40479 10.8179C9.40479 11.7906 8.61963 12.5757 7.65869 12.5757Z"
                        className={props.dotsColor}
                    />
                </g>
                <defs>
                    <clipPath id="clip0_201_82313">
                        <rect
                            width="26.5781"
                            height="24.4336"
                            fill="black"
                            transform="translate(0.00634766 0.0600586)"
                        />
                    </clipPath>
                </defs>
            </svg>
        </>
    );
};

export default Forum;
