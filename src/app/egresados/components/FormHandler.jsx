'use client';

import { filteredData } from "./FilteredFetch";

let carreerList = [];
let yearList = [];
let timer;

export const handleOptionClick = (value, formId) => {
  if (timer) {
    clearTimeout(timer);
  }
  if (formId === 'form1') {
    if (carreerList.includes(value)) {
      // Si está seleccionado, lo eliminamos de la lista
      carreerList = carreerList.filter((v) => v !== value);
    } else {
      // Si no está seleccionado, lo agregamos a la lista
      carreerList.push(value);
    }
  } else {
    const intValue = parseInt(value);
    if (yearList.includes(intValue)) {
      // Si está seleccionado, lo eliminamos de la lista
      yearList = yearList.filter((v) => v !== intValue);
    } else {
      // Si no está seleccionado, lo agregamos a la lista
      yearList.push(intValue);
    }
  }
  console.log(`Técnicos seleccionados: ${carreerList}`);
  console.log(`Generaciones seleccionadas: ${yearList}`);
  timer = setTimeout(() => {
    filteredData(carreerList, yearList);
  }, 1500); 

};