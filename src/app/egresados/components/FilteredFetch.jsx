import Airtable from 'airtable';


const base = new Airtable({
  apiKey: process.env.NEXT_PUBLIC_AIRTABLE_TOKEN,
}).base('apphEdTpWzyL0aZdp');

export const filteredData = async (carreerList, yearList) => {
  const uniqueRecords = [];
  try {
    for (let i = 0; i < carreerList.length; i++) {
      for (let j = 0; j < yearList.length; j++) {
        const records = await base('Egresados').select({
          view: 'Grid view',
          filterByFormula: `AND(year = "${yearList[j]}", FIND("${carreerList[i]}", {career}))`,
        }).firstPage();
        records.forEach((record) => {
          const isDuplicate = uniqueRecords.some((existingRecord) => existingRecord.id === record.id);
          if (!isDuplicate) {
            uniqueRecords.push(record);
          }
        });

        console.log(uniqueRecords);
      }
    }
  } catch (error) {
    console.error(error);
  }
  return uniqueRecords;
};