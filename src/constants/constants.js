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

export const lifestyleConst = ['Smoke', 'Alcohol', 'Pets', 'Couples', 'Children', 'Parties']; // this has to match the lifestyle attribute in the User Classs. Not case sensitive
export const lifestyleMap = {
	Smoke: 'smoke',
	Alcohol: 'alcohol',
	Pets: 'pets',
	Couples: 'couples',
	Children: 'children',
	Parties: 'parties',
}; // map the display string to the attributes in User Class

export const amenitiesConst = [
	'Air conditioner',
	'Swimming pool',
	'Fitness center',
	'Indoor laundry',
	'Parking',
	'Public transportation',
];
export const amenitiesMap = {
	'Air conditioner': 'airConditioner',
	'Swimming pool': 'pool',
	'Fitness center': 'gym',
	'Indoor laundry': 'laundry',
	Parking: 'parking',
	'Public transportation': 'transportation',
}; // map the display string to the attributes in User Class

export const priceMarksConst = [500, 1500, 2500, 3500].map((x) => {
	return { value: x, label: '$' + x.toString() };
});

export const distanceMarksConst = [5, 15, 25, 35, 45].map((x) => {
	return { value: x, label: x.toString() };
});