const speciesResources = {
  foo1: `link1`,
  foo2: `link2`,
  foo3: `link3`,
  test1: `endpoint1`,
  test2: `endpoint2`
}

const experimentResources = { 
  Latest: `endpoint3`,
  panel: `test1`
}

const host = `http://`

const SpeciesCardType = () => `I am a species component`

const LatestExperimentCardType = () => `I am a experiment component`

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

export {getRandomInt, latestExperimentEntries, speciesResources, experimentResources, host, SpeciesCardType, LatestExperimentCardType}