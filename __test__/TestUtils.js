
const panelNameAList = [`foo1`, `foo2`, `foo3`]
const panelNameBList = [`test1`, `test2`]


// Stolen from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
const getRandomInt = (min, max) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min)) + min //The maximum is exclusive and the minimum is inclusive
}

const latestExperimentEntries = () => {
  return [
    {
      numberOfAssays: 15,
      experimentAccession: `accession1`,
      lastUpdate: `date1`,
      experimentDescription: `description1`,
      species: `species1`
    },
    {
      numberOfAssays: 115,
      experimentAccession: `accession2`,
      lastUpdate: `date2`,
      experimentDescription: `description2`,
      species: `species2`
    },
    {
      numberOfAssays: 1115,
      experimentAccession: `accession3`,
      lastUpdate: `date3`,
      experimentDescription: `description3`,
      species: `species3`
    }
  ]
}

export {panelNameAList, panelNameBList, getRandomInt, latestExperimentEntries}