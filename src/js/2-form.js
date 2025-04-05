'use strict';

const formData = {
  email: '',
  message: '',
};

const feedbackFormEl = document.querySelector('.feedback-form');
feedbackFormEl.addEventListener('input', rec);
feedbackFormEl.addEventListener('submit', sub);

const storageKey = 'feedback-form-state';

if (localStorage.length !== 0 && localStorage.getItem(storageKey)) {
  const { email: lsEmail, message: lsMessage } = JSON.parse(
    localStorage.getItem(storageKey)
  );
  document.querySelector('input[name="email"]').value = lsEmail;
  document.querySelector('textarea[name="message"]').value = lsMessage;
  formData.email = lsEmail;
  formData.message = lsMessage;
}

function rec(evt) {
  evt.preventDefault();
  if (evt.target.name === 'email') {
    formData.email = evt.target.value.trim();
  }
  if (evt.target.name === 'message') {
    formData.message = evt.target.value.trim();
  }

  localStorage.setItem(storageKey, JSON.stringify(formData));
}

function sub(evt) {
  evt.preventDefault();
  const { email, message } = evt.target.elements;
  if (email.value === '' || message.value === '') {
    alert('Fill please all fields.');
  } else {
    console.log(formData);
    localStorage.removeItem(storageKey);
    formData.email = '';
    formData.message = '';
    feedbackFormEl.reset();
  }
}
