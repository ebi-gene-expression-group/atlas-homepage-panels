# Atlas Homepage Panels

[Expression atlas homepage](https://www.ebi.ac.uk/gxa/home) and [Single cell homepage](https://www.ebi.ac.uk/gxa/sc/home) will follow this design, with two stacked panel boxes containing of an option bar and a collection of different type of cards.

##Single cell homepage design
The top panel box introduces the experiments clustered by species, which uses [atlas-homepage-card](https://github.com/ebi-gene-expression-group/atlas-homepage-cards) package.

The bottom panel box introduces featured experiments and latest experiments, which uses [latest-experiments-cards](https://github.com/ebi-gene-expression-group/scxa-latest-experiment-cards) package.


## Run it on your browser
Use Webpack-Serve:
```
npm install
npx webpack-serve -d
```
