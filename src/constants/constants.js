export const collegesConst = ['Revelle', 'Muir', 'Marshall', 'Warren', 'Roosevelt', 'Sixth', 'Seventh', 'Eighth'];
export const schoolYearsConst = ['Freshman', 'Sophomore', 'Junior', 'Senior', 'Master', 'PHD'];
export const languagesConst = [
	'English',
	'Spanish',
	'Chinese',
	'Hindi',
	'Arabic',
	'Bengali',
	'Russian',
	'Portuguese',
	'Japanese',
	'German',
	'French',
	'Turkish',
	'Korean',
	'Italian',
	'Urdu',
	'Indonesian',
];
export const majorsConst = [
	'Anthropology',
	'Bioengineering',
	'Biological Sciences',
	'Black Diaspora and African American Studies',
	'Chemistry and Biochemistry',
	'Chinese Studies',
	'Classical Studies',
	'Cognitive Science',
	'Communication',
	'Computer Science and Engineering',
	'Critical Gender Studies',
	'Dance',
	'Data Science',
	'Economics',
	'Education Studies',
	'Electrical and Computer Engineering',
	'Engineering',
	'Environmental Systems Program',
	'Ethnic Studies',
	'German Studies',
	'Global Health',
	'Global South Studies',
	'Herbert Wertheim School of Public Health and Human Longevity Science',
	'History',
	'Italian Studies',
	'Japanese Studies',
	'Jewish Studies',
	'Latin American Studies',
	'Linguistics',
	'Literature',
	'Mathematics',
	'Mechanical and Aerospace Engineering',
	'Music',
	'NanoEngineering',
	'Philosophy',
	'Physics',
	'Political Science',
	'Psychology',
	'Scripps Institution of Oceanography',
	'Sociology ',
	'Structural Engineering',
	'Theatre and Dance ',
	'Urban Studies and Planning',
	'Visual Arts',
];

export const dislikesConst = ['Smoking', 'Alcohol', 'Pets', 'Couples', 'Children', 'Parties'];
export const hobbiesConst = [
	'Reading',
	'Watching TV',
	'Family Time',
	'Movies',
	'Fishing',
	'Computer',
	'Gardening',
	'Exercising',
];

export const amenitiesConst = [
	'Air conditioner',
	'Swimming pool',
	'Fitness center',
	'Indoor washer and dryer',
	'Covered parking',
	'Pets allowed',
	'Dishwasher',
	'Smoke-free',
	'Access to public transportation',
	'Balcony',
];

export const priceMarksConst = [500, 1500, 2500, 3500].map((x) => {
	return { value: x, label: '$' + x.toString() };
});

export const distanceMarksConst = [5, 15, 25, 35, 45].map((x) => {
	return { value: x, label: x.toString() };
});