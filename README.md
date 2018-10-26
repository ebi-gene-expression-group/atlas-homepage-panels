# Single Cell Home Page Panel Box

According to [Expression Atlas Home Page](https://www.ebi.ac.uk/gxa/home) design, we create a page containing two panel boxes with a option bar and a list of cards.

The left panel box introduces the experiments clustered by species, which uses [atlas-homepage-card](https://github.com/ebi-gene-expression-group/atlas-homepage-cards) package.

The right panel box introduces featured experiments and latest experiments, which use different styled card components.

The current version applies two new endpoints to fetch the latest experiments and a static landing page for HCA, which is implemented in a new [atlas](https://github.com/ebi-gene-expression-group/atlas/tree/feature/161508497-add-endpoint-for-latestExperiments-and-static-landingPage) branch

## Run it on your browser
Use Webpack-Serve:
```
npx webpack-serve
```
