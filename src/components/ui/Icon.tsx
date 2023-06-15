interface IIconProps {
  name: string;
}

export const Icon = ({ name }: IIconProps) => {
  return (
    <>
      {name === "logo" && (
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="20" cy="20" r="20" fill="#FF3A62" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M23.0901 23.1819H21.4925L23.5495 25.6137H22.3807L19.3235 22.217H20.1148H22.1692C24.7537 22.217 26.8476 20.1929 26.8476 17.7116C26.8476 16.643 26.4582 15.6517 25.809 14.8808C25.0265 13.7169 25.9301 12.8636 26.7322 12.8636C26.5289 11.9548 25.4178 11.8867 25.4178 11.8867C25.294 11.5288 24.9795 11 24.3693 11H22.7732C22.7522 11 22.7317 11.0031 22.7115 11.0062C22.6945 11.0088 22.6778 11.0113 22.6612 11.0119C21.8763 11.0958 21.1154 11.6687 21.8756 12.7972C21.8949 12.8241 22.9629 14.3062 22.9629 15.8296C22.9629 18.4275 20.7708 20.7093 18.0649 20.7093H13.0826H12.1218H7C7 21.5536 7.6646 22.217 8.4847 22.217H11.7168H17.7811L20.6484 25.6137H11.7168V28.1235H30.3799V25.6137H25.2829L23.0901 23.1819ZM20.868 18.7618C21.6522 17.9726 22.102 16.9064 22.102 15.8402C22.102 14.5546 21.154 13.2229 21.1443 13.2097L21.1385 13.1999L21.132 13.1893C20.921 12.878 20.8016 12.6034 20.7447 12.3518L13.6071 20.0123H17.933C19.0286 20.0123 20.071 19.5638 20.868 18.7618ZM8.4158 28.1235H10.7755V25.5889H8.4158V28.1235ZM31.3949 28.1429V25.6089L33.4286 26.8211L31.3949 28.1429ZM23.6651 12.6673C23.8986 12.6673 24.0876 12.4858 24.0876 12.2618C24.0876 12.0377 23.8986 11.8562 23.6651 11.8562C23.4317 11.8562 23.2425 12.0377 23.2425 12.2618C23.2425 12.4858 23.4317 12.6673 23.6651 12.6673Z"
            fill="white"
          />
        </svg>
      )}
      {name === "menu" && (
        <svg
          width="32"
          height="10"
          viewBox="0 0 32 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M32 0H0V2H32V0ZM32 8H8V10H32V8Z"
            fill="#1B1B1B"
          />
        </svg>
      )}
      {name == "arrowDown" && (
        <svg
          width="9"
          height="6"
          viewBox="0 0 9 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.5 3L7.5 0L9 1.5L4.5 6L0 1.5L1.5 0L4.5 3Z"
            fill="#3E29E3"
          />
        </svg>
      )}
      {name === "arrowUp" && (
        <svg
          width="9"
          height="6"
          viewBox="0 0 9 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.5 3L7.5 6L9 4.5L4.5 0L0 4.5L1.5 6L4.5 3Z"
            fill="#3E29E3"
          />
        </svg>
      )}
      {name === "contact" && (
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M14 0V6H12V2H8V0H14Z" fill="#3E29E3" />
          <path d="M12 14H0L0 2H6V4H2V12H10V8H12V14Z" fill="#3E29E3" />
        </svg>
      )}
      {name === "close" && (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.4142 10L19.1924 2.22184L17.7782 0.807624L10 8.5858L2.22183 0.807624L0.807612 2.22184L8.58579 10L0.807612 17.7782L2.22183 19.1924L10 11.4142L17.7782 19.1924L19.1924 17.7782L11.4142 10Z"
            fill="white"
          />
        </svg>
      )}
    </>
  );
};
