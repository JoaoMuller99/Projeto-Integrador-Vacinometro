const Logo = () => {
  return (
    <header>
      <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="24" y="1" width="23" height="68" rx="11.5" stroke="#3137CA" strokeWidth="2" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 35.5C0 42.4036 5.59644 48 12.5 48H21V23H12.5C5.59644 23 0 28.5964 0 35.5ZM50 48H57.5C64.4036 48 70 42.4036 70 35.5C70 28.5964 64.4036 23 57.5 23H50V48Z"
          fill="#83CDF1"
        />
        <circle cx="40" cy="21" r="2" fill="#3137CA" />
        <circle cx="31" cy="28" r="2" fill="#3137CA" />
        <circle cx="39" cy="51" r="2" fill="#3137CA" />
        <circle cx="31.5" cy="15.5" r="2.5" fill="#3137CA" />
        <circle cx="39.5" cy="35.5" r="2.5" fill="#3137CA" />
        <circle cx="31.5" cy="43.5" r="2.5" fill="#3137CA" />
      </svg>
      <h1>Vacinômetro</h1>
    </header>
  );
};

export default Logo;
