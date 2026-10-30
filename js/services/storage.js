const PREFIX='xitkj_v2_';
export function read(key,fallback){try{const value=localStorage.getItem(PREFIX+key);return value===null?fallback:JSON.parse(value)}catch{return fallback}}
export function write(key,value){localStorage.setItem(PREFIX+key,JSON.stringify(value))}
export function remove(key){localStorage.removeItem(PREFIX+key)}
export function getTheme(){return localStorage.getItem(PREFIX+'theme')||'light'}
export function setTheme(theme){localStorage.setItem(PREFIX+'theme',theme)}
export function exportLocalBackup(){return {exportedAt:new Date().toISOString(),version:2,attendance:read('attendance',{}),tasks:read('tasks',[]),finance:read('finance',[]),profiles:read('profiles',[])}}
