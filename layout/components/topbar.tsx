import { GoLocation } from "react-icons/go";
export default function TopBar() {
  return (
    <>
      <div className="nav-top d-none d-md-block border-bottom p-3">
        <div className="container nav">
          <li className="nav-item mr-3">
            <svg
              className="mr-1"
              width={18}
              height={18}
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.2875 3.75C12.02 3.89292 12.6933 4.25119 13.221 4.77895C13.7488 5.30671 14.1071 5.97995 14.25 6.7125L11.2875 3.75ZM11.2875 0.75C12.8094 0.919077 14.2287 1.60063 15.3122 2.68276C16.3957 3.76488 17.079 5.18326 17.25 6.705L11.2875 0.75ZM16.5 12.69V14.94C16.5008 15.1489 16.458 15.3556 16.3744 15.547C16.2907 15.7384 16.168 15.9102 16.014 16.0514C15.8601 16.1926 15.6784 16.3001 15.4805 16.367C15.2827 16.4339 15.073 16.4588 14.865 16.44C12.5571 16.1892 10.3402 15.4006 8.39248 14.1375C6.58035 12.986 5.04398 11.4496 3.89248 9.6375C2.62496 7.6809 1.83616 5.45325 1.58998 3.135C1.57124 2.9276 1.59589 2.71857 1.66236 2.52122C1.72882 2.32387 1.83566 2.14252 1.97605 1.98872C2.11645 1.83491 2.28733 1.71203 2.47782 1.62789C2.66831 1.54375 2.87424 1.5002 3.08248 1.5H5.33248C5.69646 1.49642 6.04932 1.62531 6.3253 1.86265C6.60128 2.09999 6.78154 2.42959 6.83248 2.79C6.92745 3.51005 7.10357 4.21705 7.35748 4.8975C7.45839 5.16594 7.48023 5.45769 7.42041 5.73816C7.36059 6.01863 7.22163 6.27608 7.01998 6.48L6.06748 7.4325C7.13515 9.31016 8.68982 10.8648 10.5675 11.9325L11.52 10.98C11.7239 10.7784 11.9813 10.6394 12.2618 10.5796C12.5423 10.5198 12.834 10.5416 13.1025 10.6425C13.7829 10.8964 14.4899 11.0725 15.21 11.1675C15.5743 11.2189 15.907 11.4024 16.1449 11.6831C16.3827 11.9638 16.5091 12.3222 16.5 12.69Z"
                stroke="#C9151B"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <a href="tel:+09638111666">09638111666</a>
          </li>
          <li className="nav-item">
            <svg
              className="mr-1"
              width={18}
              height={18}
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.00001 3H15C15.825 3 16.5 3.675 16.5 4.5V13.5C16.5 14.325 15.825 15 15 15H3.00001C2.17501 15 1.50001 14.325 1.50001 13.5V4.5C1.50001 3.675 2.17501 3 3.00001 3Z"
                stroke="#C9151B"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16.5 4.5L9.00001 9.75L1.50001 4.5"
                stroke="#C9151B"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <a href="mailto:support@evaly.com.bd">support@evato.com.bd</a>
          </li>
          <li className="nav-item ml-auto">
            <GoLocation
              style={{
                width: "18px",
                height: "18px",
                color: "#C9151B",
                marginRight: 3,
              }}
            />
            <a href="#">Store location!</a>
          </li>
          <li className="nav-item ml-3">
            <svg
              className="mr-1"
              width={18}
              height={18}
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.5 1.5H4.5C3.67157 1.5 3 2.17157 3 3V15C3 15.8284 3.67157 16.5 4.5 16.5H13.5C14.3284 16.5 15 15.8284 15 15V3C15 2.17157 14.3284 1.5 13.5 1.5Z"
                stroke="#C9151B"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9 13.5H9.0075"
                stroke="#C9151B"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <a href="#">Save big on our app!</a>
          </li>
        </div>
      </div>
    </>
  );
}
