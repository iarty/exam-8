export const CATEGORIES = ["Star Wars", "Famous people", "Saying", "Humour", "Motivational"];

export const CATEGORYLINK = [
	{ to: "/", label: "All", exact: true },
	...CATEGORIES.map(category => ({ to: `/quotes/${category}`, label: category, exact: false }))
];

export const HEADERLINK = [
	{ to: "/", label: "Quotes", exact: true },
	{ to: "/newQuotes", label: "Submit new qoutes", exact: false }
];
