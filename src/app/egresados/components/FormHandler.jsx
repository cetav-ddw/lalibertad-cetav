let carreerList = [];
let yearList = [];

export const handleOptionClick = (value, formId) => {
  if (formId === 'Career Menu') {
    if (carreerList.includes(value)) {
      // Si está seleccionado, lo eliminamos de la lista
      carreerList = carreerList.filter((v) => v !== value);
    } else {
      // Si no está seleccionado, lo agregamos a la lista
      carreerList.push(value);
    }
  }else{
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
};