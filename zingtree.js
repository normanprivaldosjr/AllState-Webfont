// zingtree custom javascript

const zingtreeNodes = [...document.querySelectorAll('.zingtree-node')]
const backBtn = document.querySelector('#back_button');
const restartBtn = document.querySelector('#restart_button');
const feedbackBtn = document.querySelector('#feedback-button');
const feedbackForm = document.querySelector('#feedback-form');

console.log('zingtreeNodes', zingtreeNodes);

backBtn.innerHTML = `
<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M10 13L5 8L10 3" stroke="#0E1941" stroke-width="1.5"/>
</svg>
`;
backBtn.setAttribute('role', 'button');

restartBtn.innerHTML = `
<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_107_180)">
  <path d="M1.50008 4.49972L3.05026 3.04997C5.78393 0.316298 10.2161 0.316299 12.9498 3.04997C15.6834 5.78364 15.6834 10.2158 12.9497 12.9495C11.0319 14.8673 8.27801 15.4397 5.86117 14.6665" stroke="#0E1941" stroke-width="1.5"/>
  <path d="M1.00009 0.999715L1.00008 4.99972L5.00008 4.99972" stroke="#0E1941" stroke-width="1.5"/>
  <circle cx="1.75" cy="11.45" r="0.75" transform="rotate(-90 1.75 11.45)" fill="#0E1941"/>
  <circle cx="3.75" cy="13.8516" r="0.75" transform="rotate(-90 3.75 13.8516)" fill="#0E1941"/>
  <circle cx="0.75" cy="8.25" r="0.75" transform="rotate(-90 0.75 8.25)" fill="#0E1941"/>
  </g>
  <defs>
  <clipPath id="clip0_107_180">
  <rect width="16" height="16" fill="white"/>
  </clipPath>
  </defs>
</svg>
`;
restartBtn.setAttribute('role', 'button');

feedbackBtn.innerHTML = `
<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <mask id="path-1-inside-1_505_36638" fill="white">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M5 0C2.23858 0 0 2.23858 0 5V7C0 9.05032 1.2341 10.8124 3 11.584L3 16L8.6 12H11C13.7614 12 16 9.76142 16 7V5C16 2.23858 13.7614 0 11 0H5Z"/>
  </mask>
  <path d="M3 11.584H4.5V10.6024L3.60056 10.2094L3 11.584ZM3 16H1.5L1.5 18.9148L3.87186 17.2206L3 16ZM8.6 12V10.5H8.1193L7.72814 10.7794L8.6 12ZM1.5 5C1.5 3.067 3.067 1.5 5 1.5V-1.5C1.41015 -1.5 -1.5 1.41015 -1.5 5H1.5ZM1.5 7V5H-1.5V7H1.5ZM3.60056 10.2094C2.36129 9.66797 1.5 8.43289 1.5 7H-1.5C-1.5 9.66775 0.106904 11.9568 2.39944 12.9585L3.60056 10.2094ZM4.5 16L4.5 11.584H1.5L1.5 16H4.5ZM7.72814 10.7794L2.12814 14.7794L3.87186 17.2206L9.47186 13.2206L7.72814 10.7794ZM11 10.5H8.6V13.5H11V10.5ZM14.5 7C14.5 8.933 12.933 10.5 11 10.5V13.5C14.5899 13.5 17.5 10.5899 17.5 7H14.5ZM14.5 5V7H17.5V5H14.5ZM11 1.5C12.933 1.5 14.5 3.067 14.5 5H17.5C17.5 1.41015 14.5899 -1.5 11 -1.5V1.5ZM5 1.5H11V-1.5H5V1.5Z" fill="black" mask="url(#path-1-inside-1_505_36638)"/>
</svg>
`;
feedbackBtn.setAttribute('role', 'button');

const config = { attributes: true };
// mutation observer for buttons
const mButtonCallback = (mutationList) => {
  if (mutationList.length) {
    const { target } = mutationList[0];
    const targetDisplay = target.style.display;

    if (targetDisplay !== 'none') {
      target.style.display = 'inline-flex';
    }

    if (target.id === 'feedback-button' && (!feedbackBtn.title || feedbackBtn.title === '')) {
      feedbackBtn.setAttribute('title', feedbackBtn.dataset.originalTitle);
    }
  }
};
const backBtnObserver = new MutationObserver(mButtonCallback);
const restartBtnObserver = new MutationObserver(mButtonCallback);
const feedbackBtnObserver = new MutationObserver(mButtonCallback);

backBtnObserver.observe(backBtn, config);
restartBtnObserver.observe(restartBtn, config);
feedbackBtnObserver.observe(feedbackBtn, config);

// mutation observer for feedback modal
const mFormCallback = (mutationList) => {
  if (mutationList.length) {
    const { target } = mutationList[0];

    if (target.getAttribute('aria-hidden') === 'false') {
      feedbackBtn.classList.add('is-active');
    } else {
      feedbackBtn.classList.remove('is-active');
    }

    if (!target.querySelector('button.close.modified')) {
      const closeBtn = target.querySelector('button.close');
      closeBtn.innerHTML = `
        <span>Close</span>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_505_36959)">
          <path d="M2.92969 2.92859L17.0713 17.0702" stroke="#0E1941" stroke-width="2"/>
          <path d="M17.0703 2.92993L2.92872 17.0715" stroke="#0E1941" stroke-width="2"/>
          </g>
          <defs>
          <clipPath id="clip0_505_36959">
          <rect width="20" height="20.0003" fill="white" transform="translate(20) rotate(90)"/>
          </clipPath>
          </defs>
        </svg>
      `;
      closeBtn.classList.add('modified');
      closeBtn.setAttribute('aria-hidden', 'false');
    }
  }
};
const feedbackFormObserver = new MutationObserver(mFormCallback);
feedbackFormObserver.observe(feedbackForm, config);
