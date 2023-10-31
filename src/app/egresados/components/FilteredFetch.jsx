import Airtable from 'airtable';


const base = new Airtable({
  apiKey: process.env.NEXT_PUBLIC_AIRTABLE_TOKEN,
}).base('apphEdTpWzyL0aZdp');

export const filteredData = async (carreerList, yearList) => {
  try {
    for (let i = 0; i < carreerList.length; i++) {
      for (let j = 0; j < yearList.length; j++) {
        const records = await base('Egresados').select({
          view: 'Grid view',
          filterByFormula: `AND(year = "${yearList[j]}", FIND("${carreerList[i]}", {career}))`,
        }).firstPage();

        console.log(carreerList[i], yearList[j], records);
      }
    }
  } catch (error) {
    console.error(error);
  }
};