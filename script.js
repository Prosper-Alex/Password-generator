'use strict';

// Passwords
const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numbers = '0123456789';
const symbols = '!@#$%^&*()_+~`|}{[]:;?><,./-=';

// Elements
const lengthEl = document.getElementById('length');
const lowerEl = document.getElementById('include-lower');
const upperEl = document.getElementById('include-upper');
const numberEl = document.getElementById('include-numbers');
const symbolEl = document.getElementById('include-symbols');
const passwordEl = document.getElementById('password');
const generateBtn = document.getElementById('generate');
const copyBtn = document.getElementById('copy');

// Click event
generateBtn.addEventListener('click', generatePassword);
copyBtn.addEventListener('click', copyPassword);

function generatePassword() {
  const length = +lengthEl.value;
  let characters = '';

  if (lowerEl.checked) characters += lowerCase;
  if (upperEl.checked) characters += upperCase;
  if (numberEl.checked) characters += numbers;
  if (symbolEl.checked) characters += symbols;

  if (characters === '') {
    passwordEl.value = 'Please select at least one option!';
    return;
  }

  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }

  passwordEl.value = password;
}

function copyPassword() {
  const password = passwordEl.value;

  if (!password) {
    alert('No password to copy!');
    return;
  }

  navigator.clipboard.writeText(password);

  copyBtn.textContent = 'Copied!';
  copyBtn.style.background = '#4CAF50';

  setTimeout(() => {
    copyBtn.textContent = 'Copy';
    copyBtn.style.background = '#61dafb';
  }, 1500);
}

// Copy password generated 

navigator.clipboard.writeText(passwordEl.value);
