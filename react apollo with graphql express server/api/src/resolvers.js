const evaluations = [{
	yearBuilt: '1980',
    floorArea: '1000 sq ft',
    footprint: '10 000 sq ft',
    furnaceType: 'Forced-air',
    furnaceFuel: 'Gas',
}, {
	yearBuilt: '1999',
    floorArea: '700sq ft',
    footprint: '5000 sq ft',
    furnaceType: 'Condensing',
    furnaceFuel: 'Potatos',
}, {
	yearBuilt: '2005',
    floorArea: '850sq ft',
    footprint: '7000 sq ft',
    furnaceType: 'Forced-air',
    furnaceFuel: 'Coal',
}]

export const resolvers = {
	Query: {
		evaluations: () => {
			return evaluations
		},
	},
}