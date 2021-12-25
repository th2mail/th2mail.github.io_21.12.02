/**
 * 파일명 : Header.js
 * 설 명 : 
 * 최초 생성일 : 
 *
 * 수정일			수정내역 
 * ---------  -----------------------------------------------------------------
 * 
 */

const searchBtn = document.querySelector('header .user-wrapper #search-btn');
const findWrapper = document.querySelector('.find-wrapper');

const loginBtn = document.querySelector('#login-btn');
const loginWrapper = document.querySelector('.login-wrapper');

searchBtn.addEventListener('click', (event) => {
  findWrapper.classList.toggle('active');
  loginWrapper.classList.remove('active');
});

loginBtn.addEventListener('click', (event) => {
  findWrapper.classList.remove('active');
  loginWrapper.classList.toggle('active');
});